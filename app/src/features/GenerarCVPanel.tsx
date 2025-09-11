export default function GenerarCVPanel() {
  return (
    <div className="grid gap-3">
      <p className="text-sm text-slate-700">
        Genera tu CV en base a tus datos.
      </p>
      <button type="button" className="w-fit rounded-xl bg-black px-4 py-2 text-white">
        Generar CV (simulado)
      </button>
      <div className="rounded-xl border p-4 text-sm text-slate-600">
        <p><b>Vista previa </b></p>
        <p>• Nombre: </p>
        <p>• Email: @bne.cl</p>
        <p>• Experiencias: </p>
      </div>
    </div>
  );
}
