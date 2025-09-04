import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/auth";

export default function Register() {
  const navigate = useNavigate();

  const [rut, setRut] = useState("");
  const [fechaNac, setFechaNac] = useState<string>("");

  const goIn = () => {
    auth.login();          
    navigate("/perfil");   
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-6 text-3xl font-bold">Registro de postulantes</h1>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Validar con Registro Civil</h2>
            <div className="grid gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">RUT</label>
                <input
                  className="w-full rounded-lg border p-2"
                  placeholder="12.345.678-9"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">Fecha de nacimiento</label>
                <input
                  className="w-full rounded-lg border p-2"
                  type="date"
                  value={fechaNac}
                  onChange={(e) => setFechaNac(e.target.value)}
                />
              </div>

              <button
                onClick={goIn}
                className="mt-2 w-full rounded-xl bg-black px-4 py-2 font-medium text-white hover:opacity-90"
              >
                Validar con Registro Civil
              </button>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Validar con ClaveÚnica</h2>
            <p className="text-sm text-gray-600 mb-4">

            </p>

            <button
              onClick={goIn}
              className="w-full rounded-xl bg-black px-4 py-2 font-medium text-white hover:opacity-90"
            >
              Validar con ClaveÚnica
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
