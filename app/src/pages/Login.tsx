import { useNavigate } from "react-router-dom";
import { auth } from "../lib/auth";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login();        // sin pedir nada
    navigate("/perfil"); // redirige al perfil
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl p-6">
        <h1 className="text-3xl font-bold mb-6">Ingreso postulantes</h1>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Ingreso con RUT</h2>

            <button
              onClick={handleLogin}
              className="w-full rounded-xl bg-black text-white px-4 py-2 font-medium hover:opacity-90"
            >
              Iniciar sesión
            </button>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Ingreso con ClaveÚnica</h2>

            <button
              onClick={handleLogin}
              className="w-full rounded-xl bg-black text-white px-4 py-2 font-medium hover:opacity-90"
            >
              Iniciar sesión con ClaveÚnica
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
