import { useState } from "react";

type Exp = {
  id: string;
  empresa: string;
  cargo: string;
  inicio: string;
  fin?: string;
};

type DatosCurricularesType = {
  situacionLaboral?: string;
  fechaInicioSituacionLaboral?: string;
  ultimoSalario?: number;
  ultimaActividadLaboral?: string;
  resumenPerfil?: string;
  experienciaLaboral?: string;
  referenciaLaboral?: string;
  nivelEducacion?: string;
  cursosCapacitaciones?: string;
  certificacionChilena?: string;
  grupoEmpleo?: string;
  idiomas?: string;
  licenciasConducir?: string;
  vehiculos?: string;
  competenciasHabilidades?: string;
  informacionLaboral?: string;
};

export default function DatosCurricularesPanel() {
  const [items, setItems] = useState<Exp[]>([]);
  const [form, setForm] = useState<Omit<Exp, "id">>({
    empresa: "",
    cargo: "",
    inicio: "",
    fin: "",
  });
  const [datosCurriculares, setDatosCurriculares] =
    useState<DatosCurricularesType>({});

  const addExperiencia = () => {
    setItems((xs) => [...xs, { id: crypto.randomUUID(), ...form }]);
    setForm({ empresa: "", cargo: "", inicio: "", fin: "" });
  };

  const handleChange = (
    field: keyof DatosCurricularesType,
    value: string | number
  ) => {
    setDatosCurriculares((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="grid gap-6 p-4">
      {/* Sección Experiencia Laboral */}
      <div className="grid gap-3 md:grid-cols-2 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold md:col-span-2">
          Agregar experiencia laboral
        </h2>
        <input
          className="rounded-lg border p-2"
          placeholder="Empresa"
          value={form.empresa}
          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
        />
        <input
          className="rounded-lg border p-2"
          placeholder="Cargo"
          value={form.cargo}
          onChange={(e) => setForm({ ...form, cargo: e.target.value })}
        />
        <input
          type="date"
          className="rounded-lg border p-2"
          value={form.inicio}
          onChange={(e) => setForm({ ...form, inicio: e.target.value })}
        />
        <input
          type="date"
          className="rounded-lg border p-2"
          value={form.fin}
          onChange={(e) => setForm({ ...form, fin: e.target.value })}
        />
        <div className="md:col-span-2">
          <button
            type="button"
            onClick={addExperiencia}
            className="rounded-xl bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            Agregar experiencia
          </button>
        </div>
      </div>

      {/* Lista de experiencias */}
      <ul className="divide-y rounded-xl border bg-white">
        {items.length ? (
          items.map((x) => (
            <li key={x.id} className="flex items-center justify-between p-3">
              <div>
                <div className="font-semibold">
                  {x.cargo} @ {x.empresa}
                </div>
                <div className="text-sm text-slate-600">
                  {x.inicio} — {x.fin || "Actual"}
                </div>
              </div>
              <button
                className="text-sm text-blue-700 hover:underline"
                onClick={() =>
                  setItems((xs) => xs.filter((i) => i.id !== x.id))
                }
              >
                Eliminar
              </button>
            </li>
          ))
        ) : (
          <li className="p-3 text-sm text-slate-500">Sin experiencias aún.</li>
        )}
      </ul>

      {/* Datos curriculares: secciones */}
      <div className="grid gap-4 bg-white p-4 rounded-lg shadow">
        {/* Experiencia laboral */}
        <div className="mb-3">
          <label className="font-semibold block mb-1">
            Experiencia laboral
          </label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            value={datosCurriculares.experienciaLaboral || ""}
            onChange={(e) => handleChange("experienciaLaboral", e.target.value)}
          />
          <button
            type="button"
            className="border-gray-500 mt-2 border px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50"
            onClick={() => alert("Editar sección Experiencia laboral")}
          >
            Agregar
          </button>
        </div>

        {/* Referencia laboral */}
        <div className="mb-3">
          <label className="font-semibold block mb-1">Referencia laboral</label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            value={datosCurriculares.referenciaLaboral || ""}
            onChange={(e) => handleChange("referenciaLaboral", e.target.value)}
          />
          <button
            type="button"
            className="border-gray-500 mt-2 border px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50"
            onClick={() => alert("Editar sección Referencia laboral")}
          >
            Agregar
          </button>
        </div>

        {/* Nivel de educación */}
        <div className="mb-3">
          <label className="font-semibold block mb-1">Nivel de educación</label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            value={datosCurriculares.nivelEducacion || ""}
            onChange={(e) => handleChange("nivelEducacion", e.target.value)}
          />
          <button
            type="button"
            className="border-gray-500 mt-2 border px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50"
            onClick={() => alert("Editar sección Nivel de educación")}
          >
            Agregar
          </button>
        </div>

        {/* Cursos y capacitaciones */}
        <div className="mb-3">
          <label className="font-semibold block mb-1">
            Cursos y capacitaciones
          </label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            value={datosCurriculares.cursosCapacitaciones || ""}
            onChange={(e) =>
              handleChange("cursosCapacitaciones", e.target.value)
            }
          />
          <button
            type="button"
            className="border-gray-500 mt-2 border px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50"
            onClick={() => alert("Editar sección Cursos y capacitaciones")}
          >
            Agregar
          </button>
        </div>

        {/* Certificación chilena */}
        <div className="mb-3">
          <label className="font-semibold block mb-1">
            Certificación chilena de habilidades laborales
          </label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            value={datosCurriculares.certificacionChilena || ""}
            onChange={(e) =>
              handleChange("certificacionChilena", e.target.value)
            }
          />
          <button
            type="button"
            className="mt-1 border px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50"
            onClick={() => alert("Editar sección Certificación chilena")}
          >
            Importar certificación
          </button>
        </div>

        {/* Grupo de empleo */}
        <div className="border-b pb-2 flex justify-between items-center mt-4">
          <h5 className="font-semibold">Grupo de Empleo</h5>
          <button
            type="button"
            className="border px-4 py-2 rounded-lg text-Gray-600 hover:underline"
            onClick={() => alert("Editar sección Grupo de Empleo")}
          >
            Editar
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <span className=" rounded-lg p-2">Indígenas</span>
          <span className="rounded-lg p-2">Adultos Mayores</span>
          <span className=" rounded-lg p-2">Personas Infractoras de Ley</span>
          <span className=" rounded-lg p-2">Migrantes</span>
          <span className=" rounded-lg p-2">Jóvenes</span>
          <span className=" rounded-lg p-2">Mujeres</span>
        </div>

        {/* Idiomas */}
        <div className="mb-3">
          <label className="font-semibold block mb-1">Idiomas</label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            value={datosCurriculares.idiomas || ""}
            onChange={(e) => handleChange("idiomas", e.target.value)}
          />
          <button
            type="button"
            className="border-gray-500 mt-2 border px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50"
            onClick={() => alert("Editar sección Idiomas")}
          >
            Agregar
          </button>
        </div>

        {/* Licencias de conducir */}
        <div className="mb-3">
          <label className="font-semibold block mb-1">
            Licencias de conducir
          </label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            value={datosCurriculares.licenciasConducir || ""}
            onChange={(e) => handleChange("licenciasConducir", e.target.value)}
          />
          <button
            type="button"
            className="border-gray-500 mt-2 border px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50"
            onClick={() => alert("Editar sección Licencias de conducir")}
          >
            Agregar
          </button>
        </div>

        {/* Vehículos */}
        <div className="mb-3">
          <label className="font-semibold block mb-1">Vehículos</label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            value={datosCurriculares.vehiculos || ""}
            onChange={(e) => handleChange("vehiculos", e.target.value)}
          />
          <button
            type="button"
            className="border-gray-500 mt-2 border px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50"
            onClick={() => alert("Editar sección Vehículos")}
          >
            Agregar
          </button>
        </div>

        {/* Competencias y habilidades */}
        <div className="mb-3">
          <label className="font-semibold block mb-1">
            Competencias y habilidades
          </label>
          <textarea
            className="border rounded-lg p-2 w-full min-h-[100px]"
            value={datosCurriculares.competenciasHabilidades || ""}
            onChange={(e) =>
              handleChange("competenciasHabilidades", e.target.value)
            }
          />
          <button
            type="button"
            className="border-gray-500 mt-2 border px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50"
            onClick={() => alert("Editar sección Competencias y habilidades")}
          >
            Agregar
          </button>
        </div>

        {/* Información laboral */}
        <div className="mb-3">
          <label className="font-semibold block mb-1">
            Información laboral
          </label>
          <textarea
            className="border rounded-lg p-2 w-full min-h-[100px]"
            value={datosCurriculares.informacionLaboral || ""}
            onChange={(e) => handleChange("informacionLaboral", e.target.value)}
          />
          <button
            type="button"
            className="border-gray-500 mt-2 border px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50"
            onClick={() => alert("Editar sección Información laboral")}
          >
            Agregar
          </button>
        </div>

        {/* Información laboral - opciones */}
        <div className="border-b pb-2 flex justify-between items-center mt-4">
          <h5 className="font-semibold">Información laboral - opciones</h5>
          <button
            type="button"
            className="border px-4 py-2 rounded-lg text-Gray-600 hover:underline"
            onClick={() =>
              alert("Editar sección Información laboral - opciones")
            }
          >
            Editar
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center mb-3">
          <span className="rounded-lg p-2">Norturno</span>
          <span className="rounded-lg p-2">Sab/Dom/Fest</span>
          <span className="rounded-lg p-2">Solo mañana</span>
          <span className="rounded-lg p-2">Solo tarde</span>
          <span className="rounded-lg p-2">Especiales</span>
        </div>
      </div>
    </div>
  );
}
