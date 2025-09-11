import { useState } from "react";

type Exp = { id: string; empresa: string; cargo: string; inicio: string; fin?: string };

export default function DatosCurricularesPanel() {
  const [items, setItems] = useState<Exp[]>([]);
  const [form, setForm] = useState<Omit<Exp, "id">>({
    empresa: "",
    cargo: "",
    inicio: "",
    fin: "",
  });

  const add = () => {
    setItems((xs) => [...xs, { id: crypto.randomUUID(), ...form }]);
    setForm({ empresa: "", cargo: "", inicio: "", fin: "" });
  };

  return (
    <div className="grid gap-4">
      <div className="grid gap-3 md:grid-cols-2">
        <input className="rounded-lg border p-2" placeholder="Empresa"
          value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })}/>
        <input className="rounded-lg border p-2" placeholder="Cargo"
          value={form.cargo} onChange={(e) => setForm({ ...form, cargo: e.target.value })}/>
        <input type="date" className="rounded-lg border p-2" value={form.inicio}
          onChange={(e) => setForm({ ...form, inicio: e.target.value })}/>
        <input type="date" className="rounded-lg border p-2" value={form.fin}
          onChange={(e) => setForm({ ...form, fin: e.target.value })}/>
        <div className="md:col-span-2">
          <button type="button" onClick={add} className="rounded-xl bg-black px-4 py-2 text-white">
            Agregar experiencia laboral
          </button>
        </div>
      </div>

      <ul className="divide-y rounded-xl border bg-white">
        {items.map((x) => (
          <li key={x.id} className="flex items-center justify-between p-3">
            <div>
              <div className="font-semibold">{x.cargo} @ {x.empresa}</div>
              <div className="text-sm text-slate-600">{x.inicio} — {x.fin || "Actual"}</div>
            </div>
            <button
              className="text-sm text-blue-700 hover:underline"
              onClick={() => setItems((xs) => xs.filter((i) => i.id !== x.id))}
            >
              Eliminar
            </button>
          </li>
        ))}
        {items.length === 0 && <li className="p-3 text-sm text-slate-500">Sin experiencias aún.</li>}
      </ul>
    </div>
  );
}
