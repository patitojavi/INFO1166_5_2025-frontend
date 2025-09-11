import React, { useState } from "react";
import DatosPersonales from "../components/datosPersonales";
import DatosCurriculares from "../components/DatosCurriculares";
import DatosRelacionados from "../components/datosRelacionados";
import DatosCV from "../components/datosCV";

const Formulario: React.FC = () => {
  const [datosPersonales, setDatosPersonales] = useState({
    nombres: "",
    primerApellido: "",
    segundoApellido: "",
    numeroDocumento: "",
    correoElectronico: "",
  });

  const [datosCurriculares, setDatosCurriculares] = useState<{
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
    idiomas?: string;
    licenciasConducir?: string;
    vehiculos?: string;
    competenciasHabilidades?: string;
    informacionLaboral?: string;
  }>({
    situacionLaboral: "",
    ultimoSalario: undefined,
    resumenPerfil: "",
  });

  const [documentosRelacionados, setDocumentosRelacionados] = useState("");
  const [formatoCV, setFormatoCV] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      datosPersonales,
      datosCurriculares,
      documentosRelacionados,
      formatoCV,
    };
    console.log(formData); // Aquí puedes enviar al backend
  };
  return (
    <div>
      <h2>Mi Perfil</h2>
      <form onSubmit={handleSubmit}>
        <DatosPersonales
          datosPersonales={datosPersonales}
          onChange={(field, value) =>
            setDatosPersonales({ ...datosPersonales, [field]: value })
          }
        />
        <DatosCurriculares
          datosCurriculares={datosCurriculares}
          onChange={(field, value) =>
            setDatosCurriculares({ ...datosCurriculares, [field]: value })
          }
        />
        <DatosRelacionados
          documentosRelacionados={documentosRelacionados}
          onChange={setDocumentosRelacionados}
        />
        <DatosCV formatoCV={formatoCV} onChange={setFormatoCV} />
        <button type="submit">Chequear Perfil</button>
      </form>
    </div>
  );
};

export default Formulario;
