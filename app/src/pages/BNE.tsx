import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function BNE() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl font-bold">Bolsa Nacional de Empleo (BNE)</h1>
            <p className="mt-3 text-gray-700">
              Encuentra y gestiona tus oportunidades laborales. Registra tu perfil, agrega experiencia y postula a ofertas.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                to="/login"
                className="rounded-xl bg-black px-4 py-2 font-medium text-white hover:opacity-90"
              >
                Ingresar
              </Link>
              <Link
                to="/register"
                className="rounded-xl border px-4 py-2 font-medium hover:bg-white"
              >
                Registrar
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">¿Qué podrás hacer?</h2>
            <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
              <li>Gestionar tus datos personales y experiencia.</li>
              <li>Subir documentos para tu CV.</li>
              <li>Generar tu CV y chequear tu perfil.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
