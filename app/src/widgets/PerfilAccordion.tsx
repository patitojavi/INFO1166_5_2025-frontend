import { useState } from "react";
import { Accordion, AccordionItem } from "../components/Accordion";
import DatosPersonalesPanel from "../features/DatosPersonalesPanel";
import DatosCurricularesPanel from "../features/DatosCurricularesPanel";
import DocumentosCVPanel from "../features/DocumentosCVPanel";
import GenerarCVPanel from "../features/GenerarCVPanel";

type Key = "personales" | "curriculares" | "documentos" | "cv" | null;

export default function PerfilAccordion() {
  const [open, setOpen] = useState<Key>(null);

  const ctl = (k: Exclude<Key, null>) => ({
    open: open === k,
    onToggle: () => setOpen(open === k ? null : k),
  });

  return (
    <section className="rounded-xl border bg-white p-4">
      <h2 className="mb-3 text-center text-xl font-bold text-blue-700">Mi perfil</h2>

      <Accordion>
        <AccordionItem title="Datos personales" {...ctl("personales")}>
          <DatosPersonalesPanel />
        </AccordionItem>

        <AccordionItem title="Datos curriculares" {...ctl("curriculares")}>
          <DatosCurricularesPanel />
        </AccordionItem>

        <AccordionItem title="Documentos relacionados con el CV" {...ctl("documentos")}>
          <DocumentosCVPanel />
        </AccordionItem>

        <AccordionItem title="Generar CV" {...ctl("cv")}>
          <GenerarCVPanel />
        </AccordionItem>
      </Accordion>
    </section>
  );
}
