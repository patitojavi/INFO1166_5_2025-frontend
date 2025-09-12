// src/pages/BNE.tsx
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function BNE() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Por ahora, podrías mandar al login o solo hacer console.log
    console.log("Buscar:", q);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top navbar reutilizable */}
      <Navbar />

      {/* Search hero (barra grande) */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <p className="text-sm text-gray-600 mb-2">¿Qué empleo buscas?</p>
          <form onSubmit={onSearch} className="flex items-stretch gap-2">
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Profesión, empresa o palabra clave*"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black/70"
              aria-label="Buscar empleo"
            />
            <button
              type="submit"
              className="rounded-xl bg-black px-6 py-3 font-medium text-white hover:opacity-90"
            >
              Buscar
            </button>
          </form>
        </div>
      </section>

      {/* Barra de ayuda (roja) */}
      <section className="bg-red-700 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="flex flex-wrap items-center gap-6 py-3 text-sm">
            <li className="font-semibold">AYUDA</li>
            <li className="opacity-90 hover:opacity-100"><a href="#">Fondo de Cesantía Solidario</a></li>
            <li className="opacity-90 hover:opacity-100"><a href="#">Preguntas Frecuentes</a></li>
            <li className="opacity-90 hover:opacity-100"><a href="#">Orientación Laboral</a></li>
            <li className="opacity-90 hover:opacity-100"><a href="#">Dónde buscar empleo</a></li>
            <li className="opacity-90 hover:opacity-100"><a href="#">Novedades</a></li>
          </ul>
        </div>
      </section>

      {/* Banner principal tipo “Feria Laboral” */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="grid gap-6 rounded-2xl border p-6 shadow-sm lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                FERIA LABORAL
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                <span className="text-fuchsia-600">#HayVacantes</span><br />
                para un mejor empleo, capacitarse<br />y reconvertirse laboralmente.
              </h2>
              <p className="mt-3 text-gray-700">
                Conoce las próximas ferias y postula a empleos hoy.
              </p>
              <div className="mt-5 flex gap-3">
                <Link
                  to="/login"
                  className="rounded-xl bg-black px-5 py-2.5 font-medium text-white hover:opacity-90"
                >
                  Postula aquí
                </Link>
                <Link
                  to="/register"
                  className="rounded-xl border px-5 py-2.5 font-medium hover:bg-white"
                >
                  Regístrate
                </Link>
              </div>
            </div>

            {/* Imagen/ilustración de relleno */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="h-full min-h-[220px] w-full rounded-2xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-500 p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-indigo-200 to-pink-200" />
                </div>
              </div>
              {/* Pseudo “slider dots” */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                <span className="h-2 w-2 rounded-full bg-white/80" />
                <span className="h-2 w-2 rounded-full bg-white/40" />
                <span className="h-2 w-2 rounded-full bg-white/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BNE en cifras */}
      <section className="bg-blue-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h3 className="mb-4 text-lg font-semibold">BNE en cifras</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="81.342" label="Ofertas de empleo" icon="🔎" />
            <StatCard value="439.526" label="Vacantes" icon="👥" />
            <StatCard value="5.338.277" label="Usuarios registrados" icon="🧑‍💻" />
            <StatCard value="113.043" label="Empresas registradas" icon="🏢" />
          </div>
        </div>
      </section>

      {/* Novedades */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h3 className="mb-6 text-xl font-bold">Novedades</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <PromoCard title="SIMEL Chile" subtitle="Trabajo decente" />
            <PromoCard title="Observatorio Laboral" subtitle="Datos y estudios" />
            <PromoCard title="Chile Valora" subtitle="Certificación de competencias" />
            <PromoCard title="Contrata y capacita" subtitle="Para empleadores" />
            <PromoCard title="Empleo Agro" subtitle="Portal sector agro" />
            <PromoCard title="Informes" subtitle="Reportes BNE" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ======= subcomponentes simples ======= */

function StatCard({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div className="rounded-2xl bg-blue-900/40 p-5">
      <div className="text-2xl">{icon}</div>
      <div className="mt-2 text-3xl font-extrabold leading-none">{value}</div>
      <div className="mt-1 text-sm opacity-90">{label}</div>
    </div>
  );
}

function PromoCard({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <a
      href="#"
      className="block overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="h-28 w-full bg-gradient-to-br from-sky-200 to-emerald-200" />
      <div className="p-4">
        <div className="text-lg font-semibold">{title}</div>
        {subtitle && <div className="text-sm text-gray-600">{subtitle}</div>}
      </div>
    </a>
  );
}
