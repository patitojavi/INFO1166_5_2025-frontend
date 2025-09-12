import { useState } from "react";

type Form = {
  mostrarEnCV: boolean;
  tipoDocumento: string;
  numeroDocumento: string;
  nombres: string;
  primerApellido: string;
  segundoApellido: string;
  sexo: string;
  fechaNacimiento: string;
  nacionalidad: string;
  estadoCivil: string;
  numeroCelular?: string;
  numeroAlterno?: string;
  correoElectronico: string;
  recibirNotificaciones?: string;
  region?: string;
  comuna?: string;
  calle?: string;
  numero?: string;
  departamento?: string;
  villa?: string;
  comoSeEntero?: string;
  tieneDiscapacidad?: string;
  declararDiscapacidad?: string;
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
    numeroCelular: "",
    numeroAlterno: "",
    correoElectronico: "correo@ejemplo.com",
    recibirNotificaciones: "",
    region: "",
    comuna: "",
    calle: "",
    numero: "",
    departamento: "",
    villa: "",
    comoSeEntero: "",
    tieneDiscapacidad: "",
    declararDiscapacidad: "",
  });

  const [certificado, setCertificado] = useState(true);
  const disabled = certificado;

  const set =
    <K extends keyof Form>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value as Form[K] });

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div className="rounded-t-xl border bg-gradient-to-b from-sky-50 to-slate-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-800">
            Datos Personales
          </h3>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-700">¿Mostrar en CV?</span>
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
            <button
              type="button"
              onClick={() => setCertificado((v) => !v)}
              className="rounded-lg border px-3 py-1.5 text-xs font-medium hover:bg-white"
            >
              {disabled ? "Editar" : "Bloquear"}
            </button>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <form className="grid gap-6 rounded-xl border bg-white p-4">
        {/* Documentos y nombre */}
        <div className="grid md:grid-cols-2 gap-4">
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
            />
          </FormField>
          <FormField label="Nombres">
            <input
              className="w-full rounded-lg border p-2"
              value={form.nombres}
              onChange={set("nombres")}
              disabled={disabled}
            />
          </FormField>
          <FormField label="Primer Apellido">
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
        </div>

        {/* Sexo y fecha */}
        <div className="grid md:grid-cols-2 gap-4">
          <FormField label="Sexo">
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
          <FormField label="Fecha de Nacimiento">
            <input
              type="date"
              className="w-full rounded-lg border p-2"
              value={form.fechaNacimiento}
              onChange={set("fechaNacimiento")}
              disabled={disabled}
            />
          </FormField>
        </div>

        {/* Nacionalidad y estado civil */}
        <div className="grid md:grid-cols-2 gap-4">
          <FormField label="Nacionalidad">
            <input
              className="w-full rounded-lg border p-2"
              value={form.nacionalidad}
              onChange={set("nacionalidad")}
              disabled={disabled}
            />
          </FormField>
          <FormField label="Estado Civil">
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
        </div>

        {/* Contacto */}
        <Section title="Datos de Contacto" onEdit={() => alert("Editar")}>
          <div className="grid md:grid-cols-2 gap-4">
            <FormField label="Número de Celular">
              <input
                className="w-full rounded-lg border p-2"
                value={form.numeroCelular}
                onChange={set("numeroCelular")}
                disabled={disabled}
              />
            </FormField>
            <FormField label="Número Alterno">
              <input
                className="w-full rounded-lg border p-2"
                value={form.numeroAlterno}
                onChange={set("numeroAlterno")}
                disabled={disabled}
              />
            </FormField>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <FormField label="Correo Electrónico">
              <input
                type="email"
                className="w-full rounded-lg border p-2"
                value={form.correoElectronico}
                onChange={set("correoElectronico")}
                disabled={disabled}
              />
            </FormField>
            <FormField label="¿Recibir notificaciones?">
              <input
                className="w-full rounded-lg border p-2"
                value={form.recibirNotificaciones}
                onChange={set("recibirNotificaciones")}
                disabled={disabled}
              />
            </FormField>
          </div>
        </Section>

        {/* Dirección */}
        <Section title="Dirección" onEdit={() => alert("Editar")}>
          <div className="grid md:grid-cols-2 gap-4">
            <FormField label="Región">
              <input
                className="w-full rounded-lg border p-2"
                value={form.region}
                onChange={set("region")}
                disabled={disabled}
              />
            </FormField>
            <FormField label="Comuna">
              <input
                className="w-full rounded-lg border p-2"
                value={form.comuna}
                onChange={set("comuna")}
                disabled={disabled}
              />
            </FormField>
          </div>
          <FormField label="Calle">
            <input
              className="w-full rounded-lg border p-2"
              value={form.calle}
              onChange={set("calle")}
              disabled={disabled}
            />
          </FormField>
          <div className="grid md:grid-cols-3 gap-4">
            <FormField label="Número">
              <input
                className="w-full rounded-lg border p-2"
                value={form.numero}
                onChange={set("numero")}
                disabled={disabled}
              />
            </FormField>
            <FormField label="Departamento">
              <input
                className="w-full rounded-lg border p-2"
                value={form.departamento}
                onChange={set("departamento")}
                disabled={disabled}
              />
            </FormField>
            <FormField label="Villa">
              <input
                className="w-full rounded-lg border p-2"
                value={form.villa}
                onChange={set("villa")}
                disabled={disabled}
              />
            </FormField>
          </div>
        </Section>

        {/* Otros */}
        <Section title="Otros" onEdit={() => alert("Editar")}>
          <FormField label="¿Cómo se enteró de nosotros?">
            <input
              className="w-full rounded-lg border p-2"
              value={form.comoSeEntero}
              onChange={set("comoSeEntero")}
              disabled={disabled}
            />
          </FormField>
        </Section>

        {/* Discapacidad */}
        <Section title="Discapacidad" onEdit={() => alert("Editar")}>
          <div className="grid md:grid-cols-2 gap-4">
            <FormField label="¿Posee alguna discapacidad?">
              <input
                className="w-full rounded-lg border p-2"
                value={form.tieneDiscapacidad}
                onChange={set("tieneDiscapacidad")}
                disabled={disabled}
              />
            </FormField>
            <FormField label="¿Desea declarar su discapacidad?">
              <input
                className="w-full rounded-lg border p-2"
                value={form.declararDiscapacidad}
                onChange={set("declararDiscapacidad")}
                disabled={disabled}
              />
            </FormField>
          </div>
        </Section>

        {/* Guardar */}
        <div>
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
              * Desbloquea con “Editar” para modificar los campos.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

/* ---------- Subcomponentes ---------- */
function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </label>
      {children}
    </div>
  );
}

function Section({
  title,
  children,
  onEdit,
}: {
  title: string;
  children: React.ReactNode;
  onEdit?: () => void;
}) {
  return (
    <div className="space-y-4 border-t pt-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
        {onEdit && (
          <button
            type="button"
            className=" border py-2 px-1 rounded-lg btn btn-outline-primary button-editar"
            onClick={onEdit}
          >
            Editar
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
