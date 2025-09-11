import React from "react";
import "../styles/formulario.css";
interface DatosCurricularesProps {
  datosCurriculares: {
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
  onChange: (field: string, value: string | number) => void;
}

const DatosCurriculares: React.FC<DatosCurricularesProps> = ({
  datosCurriculares: dc,
  onChange,
}) => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-secondary text-white">
        <h5 className="card-title">Datos Curriculares</h5>
      </div>
      <div className="card-body">
        {/* Fila 1 */}
        <div className="d-flex justify-content-between align-items-center mt-4 border-bottom pb-2">
          <h5 className="mb-0">Condicion laboral actual</h5>
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Condición laboral actual")}
          >
            Editar
          </button>
        </div>
        <div className="scroll-row">
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Situación Laboral</label>
            <input
              type="text"
              className="form-control"
              value={dc.situacionLaboral || ""}
              onChange={(e) => onChange("situacionLaboral", e.target.value)}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">
              Fecha inicio situación laboral
            </label>
            <input
              type="date"
              className="form-control"
              value={dc.fechaInicioSituacionLaboral || ""}
              onChange={(e) =>
                onChange("fechaInicioSituacionLaboral", e.target.value)
              }
            />
          </div>

          {/* Fila 2 */}

          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Último salario</label>
            <input
              type="number"
              className="form-control"
              value={dc.ultimoSalario || ""}
              onChange={(e) =>
                onChange("ultimoSalario", Number(e.target.value))
              }
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">
              Última actividad laboral
            </label>
            <input
              type="text"
              className="form-control"
              value={dc.ultimaActividadLaboral || ""}
              onChange={(e) =>
                onChange("ultimaActividadLaboral", e.target.value)
              }
            />
          </div>
        </div>

        {/* Resumen perfil */}
        <div className="d-flex justify-content-between align-items-center mt-4 border-bottom pb-2">
          <h5 className="mb-0">Resumen del perfil</h5>
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Resumen del perfil")}
          >
            Editar
          </button>
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label fw-bold">Resumen del perfil</label>
          <textarea
            className="form-control "
            style={{ minHeight: "100px" }}
            value={dc.resumenPerfil || ""}
            onChange={(e) => onChange("resumenPerfil", e.target.value)}
          />
        </div>

        {/* Experiencia laboral */}
        <div className="mb-3">
          <label className="form-label fw-bold">Experiencia laboral</label>

          <input
            type="text"
            className="form-control"
            value={dc.experienciaLaboral || ""}
            onChange={(e) => onChange("experienciaLaboral", e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Experiencia laboral")}
          >
            agregar
          </button>
        </div>

        {/* Referencia laboral */}
        <div className="mb-3">
          <label className="form-label fw-bold">Referencia laboral</label>
          <input
            type="text"
            className="form-control"
            value={dc.referenciaLaboral || ""}
            onChange={(e) => onChange("referenciaLaboral", e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Experiencia laboral")}
          >
            agregar
          </button>
        </div>

        {/* Nivel de educación */}
        <div className="mb-3">
          <label className="form-label fw-bold">Nivel de educación</label>
          <input
            type="text"
            className="form-control"
            value={dc.nivelEducacion || ""}
            onChange={(e) => onChange("nivelEducacion", e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Experiencia laboral")}
          >
            agregar
          </button>
        </div>

        {/* Cursos y capacitaciones */}
        <div className="mb-3">
          <label className="form-label fw-bold">Cursos y capacitaciones</label>
          <input
            type="text"
            className="form-control"
            value={dc.cursosCapacitaciones || ""}
            onChange={(e) => onChange("cursosCapacitaciones", e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Experiencia laboral")}
          >
            agregar
          </button>
        </div>

        {/* Certificación chilena */}
        <div className="mb-3">
          <label className="form-label fw-bold">
            Certificación chilena de habilidades laborales
          </label>
          <input
            type="text"
            className="form-control"
            value={dc.certificacionChilena || ""}
            onChange={(e) => onChange("certificacionChilena", e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Experiencia laboral")}
          >
            Importar certificación
          </button>
        </div>
        {/* Grupo de Empleo */}
        <div className="d-flex justify-content-between align-items-center mt-4 border-bottom pb-2">
          <h5 className="mb-0">Grupo de Empleo</h5>
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Grupo de Empleo")}
          >
            Editar
          </button>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Grupo de Empleo</label>
          <ul className="list-group">
            <li className="list-group-item">Indígenas</li>
            <li className="list-group-item">Adultos Mayores</li>
            <li className="list-group-item">Personas Infractoras de Ley</li>
            <li className="list-group-item">Migrantes</li>
            <li className="list-group-item">Jóvenes</li>
            <li className="list-group-item">Mujeres</li>
          </ul>
        </div>

        {/* Idiomas */}
        <div className="mb-3">
          <label className="form-label fw-bold">Idiomas</label>
          <input
            type="text"
            className="form-control"
            value={dc.idiomas || ""}
            onChange={(e) => onChange("idiomas", e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Idiomas")}
          >
            agregar
          </button>
        </div>

        {/* Licencias de conducir */}
        <div className="mb-3">
          <label className="form-label fw-bold">Licencias de conducir</label>
          <input
            type="text"
            className="form-control"
            value={dc.licenciasConducir || ""}
            onChange={(e) => onChange("licenciasConducir", e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Licencias de conducir")}
          >
            agregar
          </button>
        </div>

        {/* Vehículos */}
        <div className="mb-3">
          <label className="form-label fw-bold">Vehículos</label>
          <input
            type="text"
            className="form-control"
            value={dc.vehiculos || ""}
            onChange={(e) => onChange("vehiculos", e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Vehículos")}
          >
            agregar
          </button>
        </div>

        {/* Competencias y habilidades */}
        <div className="mb-3">
          <label className="form-label fw-bold">
            Competencias y habilidades
          </label>
          <textarea
            className="form-control"
            value={dc.competenciasHabilidades || ""}
            onChange={(e) =>
              onChange("competenciasHabilidades", e.target.value)
            }
          />
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() =>
              alert("Editar sección de Competencias y habilidades")
            }
          >
            agregar
          </button>
        </div>

        {/* Información laboral */}
        <div className="mb-3">
          <label className="form-label fw-bold">Información laboral</label>
          <textarea
            className="form-control"
            value={dc.informacionLaboral || ""}
            onChange={(e) => onChange("informacionLaboral", e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Información laboral")}
          >
            agregar
          </button>
        </div>
        {/* Información laboral - opciones */}
        <div className="d-flex justify-content-between align-items-center mt-4 border-bottom pb-2">
          <h5 className="mb-0">Información laboral - opciones</h5>
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() =>
              alert("Editar sección de Información laboral - opciones")
            }
          >
            Editar
          </button>
        </div>
        <div className="mb-3 text-end">
          <ul className="list-group-lab">
            <li className="list-group-item">Norturno</li>
            <li className="list-group-item">Sab/Dom/Fest</li>
            <li className="list-group-item">Solo mañana</li>
            <li className="list-group-item">Solo tarde</li>
            <li className="list-group-item">Especiales</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DatosCurriculares;
