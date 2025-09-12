// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/auth";
import { api } from "../lib/api";
import PerfilAccordion from "../widgets/PerfilAccordion";

type Perfil = {
  id: string;
  nombre: string;
  email?: string;
  nivelEstudios?: string;
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState<Perfil | null>(null);

  useEffect(() => {
    let mounted = true;
    api.get<Perfil>("/perfil/me")
      .then((p) => mounted && setPerfil(p))
      .catch(() => {
        if (mounted) {
          setPerfil({
            id: "u1",
            nombre: "PATRICIO JAVIER BENAVIDES MONSALVEZ",
            nivelEstudios: "Educación superior Incompleta",
          });
        }
      });
    return () => { mounted = false; };
  }, []);

  const logout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar onLogout={logout} />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[280px_1fr]">
        <Sidebar />

        <main className="space-y-6">
          <Card className="text-center">
            <h1 className="text-2xl font-bold">Bienvenido/a</h1>
          </Card>

          <InfoBanner />

          <Card>
            <div className="text-blue-700 font-semibold">
              {perfil?.nombre ?? "Postulante"}
            </div>
            <div className="mt-3 text-sm">
              <div className="text-slate-500">Nivel de estudios</div>
              <div>{perfil?.nivelEstudios ?? "—"}</div>
            </div>
          </Card>

          {/* Acordeón con los 4 paneles (datos personales, curriculares, documentos y generar CV) */}
          <PerfilAccordion />
        </main>
      </div>
    </div>
  );
}

/* ================== Subcomponentes pequeños ================== */

function TopBar({ onLogout }: { onLogout: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="h-14 bg-white border-b">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <LogoBNE />
          <span className="font-semibold">Bolsa Nacional de Empleo</span>
        </div>

        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-1.5 text-sm font-medium hover:bg-slate-200"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 text-xs">👤</span>
            <span>Mi cuenta</span>
            <span className="text-slate-500">▾</span>
          </button>

          {open && (
            <div className="absolute right-0 z-10 mt-2 w-40 overflow-hidden rounded-xl border bg-white shadow-md">
              <button
                onClick={() => { setOpen(false); onLogout(); }}
                className="block w-full px-4 py-2 text-left text-sm hover:bg-slate-50"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="space-y-4">
      <Card>
        <h3 className="mb-2 text-sm font-semibold">Bienvenido/a</h3>
        <div>
          <div className="mb-1 text-xs text-slate-600">ESTADO DE INSCRIPCIÓN BNE:</div>
          <button className="w-full rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
            COMPLETO
          </button>
          <a href="#" className="mt-2 block text-xs text-blue-600 hover:underline">¿Qué es esto?</a>
        </div>
      </Card>

      <div className="rounded-xl border bg-white">
        <div className="flex items-center justify-between border-b p-3">
          <div className="text-sm font-semibold">Mi perfil</div>
          <div className="flex items-center gap-2 text-xs">
            <span>Privado</span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" />
              <div className="h-5 w-9 rounded-full bg-slate-300 peer-checked:bg-blue-600 transition" />
              <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4" />
            </label>
          </div>
        </div>
        <nav className="p-2 text-sm">
          <SideLink text="Datos personales" active />
          <SideLink text="Datos curriculares" />
          <SideLink text="Generar CV" />
          <SideLink text="Adjuntar documentos" />
        </nav>
      </div>

      <Card>
        <nav className="p-2 text-sm">
          <SideGroup title="Mis Postulaciones" />
          <SideGroup title="Invitaciones a Postular" />
          <SideLink text="Buscar empleo" />
          <SideLink text="Mis búsquedas habituales" />
        </nav>
      </Card>

      <Card>
        <nav className="p-2 text-sm">
          <SideLink text="Tus beneficios asociados" />
          <SideLink text="Eventos" />
          <SideLink text="Estado certificación seguro de cesantía" />
          <SideLink text="Atenciones recibidas" />
          <SideLink text="Contáctenos" />
          <SideLink text="Cambiar contraseña" />
        </nav>
      </Card>
    </aside>
  );
}

function InfoBanner() {
  return (
    <section className="rounded-xl border bg-gradient-to-r from-sky-50 to-slate-50 p-4">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-200">ℹ️</span>
        <p className="text-sm text-slate-700">
          No olvides actualizar tus datos y encontrar el trabajo que deseas
        </p>
      </div>
    </section>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`rounded-xl border bg-white p-4 ${className}`}>{children}</section>;
}

function SideLink({ text, active = false }: { text: string; active?: boolean }) {
  return (
    <a
      href="#"
      className={`block rounded-lg px-3 py-2 ${active ? "bg-slate-100 font-semibold" : "hover:bg-slate-50"}`}
    >
      {text}
    </a>
  );
}
function SideGroup({ title }: { title: string }) {
  return (
    <div className="rounded-lg px-3 py-2 font-semibold hover:bg-slate-50">
      {title}
    </div>
  );
}
function LogoBNE() {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">bne</span>

    </div>
  );
}
