export default function DocumentosCVPanel() {
  return (
    <div className="grid gap-3">
      <p className="text-sm text-slate-700">
        Sube documentos asociados a tu CV (certificados, títulos, etc.). 
      </p>
      <div className="rounded-xl border bg-slate-50 p-4">
        <input type="file" className="block w-full text-sm" />
        <button type="button" className="mt-3 rounded-xl bg-black px-4 py-2 text-white">
          Subir documento 
        </button>
      </div>
      <ul className="text-sm text-slate-600">
        <li>• Certificado de título.pdf</li>
        <li>• Curso React.zip</li>
      </ul>
    </div>
  );
}
