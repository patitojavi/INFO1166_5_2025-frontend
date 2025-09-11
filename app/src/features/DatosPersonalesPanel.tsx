import { useState } from "react";

type Form = {
  mostrarEnCV: boolean;
  tipoDocumento: string;
  numeroDocumento: string; // RUT / DNI / Pasaporte
  nombres: string;
  primerApellido: string;
  segundoApellido: string;
  sexo: string;
  fechaNacimiento: string; // yyyy-mm-dd
  nacionalidad: string;
  estadoCivil: string;
};

export default function DatosPersonalesPanel() {
  const [form, setForm] = useState<Form>({
    mostrarEnCV: true,
    tipoDocumento: "RUT",
    numeroDocumento: "12.345.678-9",
    nombres: "PATRICIO JAVIER",
    primerApellido: "BENAVIDES",
    segundoApellido: "MONSALVEZ",
    sexo: "Masculino",
    fechaNacimiento: "2002-11-17",
    nacionalidad: "Chilena",
    estadoCivil: "Soltera/o",
  });


  const [certificado, setCertificado] = useState(true);
  const disabled = certificado; 

  const set = <K extends keyof Form>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value as Form[K] });

  return (
    <div className="space-y-4">
      {/* Encabezado "Datos postulante" */}
      <div className="rounded-t-xl border bg-gradient-to-b from-sky-50 to-slate-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-800">Datos postulante</h3>

          {/* Mostrar en CV + toggle de edición (simulado) */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-700">¿Desea que esta información se muestre en su currículum?</span>
              <label className="inline-flex items-center gap-1">
                <input
                  type="radio"
                  name="mostrarCV"
                  checked={form.mostrarEnCV}
                  onChange={() => setForm({ ...form, mostrarEnCV: true })}
                />
                <span>SI</span>
              </label>
              <label className="inline-flex items-center gap-1">
                <input
                  type="radio"
                  name="mostrarCV"
                  checked={!form.mostrarEnCV}
                  onChange={() => setForm({ ...form, mostrarEnCV: false })}
                />
                <span>NO</span>
              </label>
            </div>

            {/* Botón para desbloquear/volver a bloquear edición (solo UI) */}
            <button
              type="button"
              onClick={() => setCertificado((v) => !v)}
              className="rounded-lg border px-3 py-1.5 text-xs font-medium hover:bg-white"
              title="Editar (simulado) — quita el bloqueo temporalmente"
            >
              {disabled ? "Editar" : "Bloquear"}
            </button>
          </div>
        </div>
      </div>

      {/* Banner informativo */}
      <div className="rounded-xl border bg-gradient-to-r from-sky-100 to-sky-50 px-4 py-3 text-sm text-slate-800">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-300/70 text-slate-800">ℹ️</span>
          <p>Estos datos son certificados por Registro civil.</p>
        </div>
      </div>

      {/* Formulario*/}
      <form className="grid gap-4 rounded-xl border bg-white p-4 md:grid-cols-2">
        {/* Tipo y número de documento */}
        <FormField label="Tipo Documento">
          <select
            className="w-full rounded-lg border p-2"
            value={form.tipoDocumento}
            onChange={set("tipoDocumento")}
            disabled={disabled}
          >
            <option>RUT</option>
            <option>DNI</option>
            <option>Pasaporte</option>
          </select>
        </FormField>

        <FormField label="Número Documento">
          <input
            className="w-full rounded-lg border p-2"
            value={form.numeroDocumento}
            onChange={set("numeroDocumento")}
            disabled={disabled}
            placeholder="12.345.678-9"
          />
        </FormField>

        {/* Nombres y apellidos */}
        <FormField label="Nombre(s)*">
          <input
            className="w-full rounded-lg border p-2"
            value={form.nombres}
            onChange={set("nombres")}
            disabled={disabled}
          />
        </FormField>

        <FormField label="Primer Apellido*">
          <input
            className="w-full rounded-lg border p-2"
            value={form.primerApellido}
            onChange={set("primerApellido")}
            disabled={disabled}
          />
        </FormField>

        <FormField label="Segundo Apellido">
          <input
            className="w-full rounded-lg border p-2"
            value={form.segundoApellido}
            onChange={set("segundoApellido")}
            disabled={disabled}
          />
        </FormField>

        {/* Sexo y Fecha de nacimiento */}
        <FormField label="Sexo*">
          <select
            className="w-full rounded-lg border p-2"
            value={form.sexo}
            onChange={set("sexo")}
            disabled={disabled}
          >
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Otro</option>
            <option>Prefiero no decir</option>
          </select>
        </FormField>

        <FormField label="Fecha de nacimiento*">
          <input
            type="date"
            className="w-full rounded-lg border p-2"
            value={form.fechaNacimiento}
            onChange={set("fechaNacimiento")}
            disabled={disabled}
          />
        </FormField>

        {/* Nacionalidad y Estado civil */}
        <FormField label="Nacionalidad">
          <input
            className="w-full rounded-lg border p-2"
            value={form.nacionalidad}
            onChange={set("nacionalidad")}
            disabled={disabled}
            placeholder="Chilena"
          />
        </FormField>

        <FormField label="Estado civil">
          <select
            className="w-full rounded-lg border p-2"
            value={form.estadoCivil}
            onChange={set("estadoCivil")}
            disabled={disabled}
          >
            <option>Soltera/o</option>
            <option>Casada/o</option>
            <option>Divorciada/o</option>
            <option>Viuda/o</option>
            <option>Conviviente</option>
          </select>
        </FormField>

        {/* Botón Guardar */}
        <div className="md:col-span-2">
          <button
            type="button"
            className="rounded-xl bg-black px-4 py-2 font-medium text-white disabled:opacity-50"
            disabled={disabled}
            onClick={() => alert("Guardado")}
          >
            Guardar
          </button>
          {disabled && (
            <p className="mt-2 text-xs text-slate-500">
              * Desbloquea con “Editar” para probar cambios de campos.
            </p>
          )}
        </div>
      </form>
    </div>



  );
}

/* ---------- Subcomponente pequeño para etiqueta + contenido ---------- */
function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      {children}
    </div>
  );
}
