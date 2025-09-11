import React from "react";
import "../styles/formulario.css";
interface DatosPersonalesProps {
  datosPersonales: {
    tipoDocumento?: string;
    numeroDocumento: string;
    nombres: string;
    primerApellido: string;
    segundoApellido: string;
    sexo?: string;
    fechaNacimiento?: string;
    nacionalidad?: string;
    estadoCivil?: string;
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
  onChange: (field: string, value: string) => void;
}

const DatosPersonales: React.FC<DatosPersonalesProps> = ({
  datosPersonales: dp,
  onChange,
}) => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white">
        <h5 className="card-title">Datos Personales</h5>
      </div>
      <div className="card-body">
        {/* Fila 1 */}
        <div className="scroll-row">
          <div className="col-md-3">
            <label className="form-label fw-bold">Tipo de Documento</label>
            <input
              type="text"
              className="form-control"
              value={dp.tipoDocumento || ""}
              onChange={(e) => onChange("tipoDocumento", e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label fw-bold">Número de Documento</label>
            <input
              type="text"
              className="form-control"
              value={dp.numeroDocumento}
              onChange={(e) => onChange("numeroDocumento", e.target.value)}
            />
          </div>
        </div>
        <div className="scroll-row">
          <div className="col-md-3">
            <label className="form-label fw-bold">Nombres</label>
            <input
              type="text"
              className="form-control"
              value={dp.nombres}
              onChange={(e) => onChange("nombres", e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">Primer Apellido</label>
            <input
              type="text"
              className="form-control"
              value={dp.primerApellido}
              onChange={(e) => onChange("primerApellido", e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label fw-bold">Segundo Apellido</label>
            <input
              type="text"
              className="form-control"
              value={dp.segundoApellido || ""}
              onChange={(e) => onChange("segundoApellido", e.target.value)}
            />
          </div>
        </div>
        {/* Fila 3 */}
        <div className="scroll-row">
          <div className="col-md-3">
            <label className="form-label fw-bold">Sexo</label>
            <input
              type="text"
              className="form-control"
              value={dp.sexo || ""}
              onChange={(e) => onChange("sexo", e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label fw-bold">Fecha de Nacimiento</label>
            <input
              type="date"
              className="form-control"
              value={dp.fechaNacimiento || ""}
              onChange={(e) => onChange("fechaNacimiento", e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label fw-bold">Nacionalidad</label>
            <input
              type="text"
              className="form-control"
              value={dp.nacionalidad || ""}
              onChange={(e) => onChange("nacionalidad", e.target.value)}
            />
          </div>

          {/* Estado civil */}

          <div className="col-md-3">
            <label className="form-label fw-bold">Estado Civil</label>
            <input
              type="text"
              className="form-control"
              value={dp.estadoCivil || ""}
              onChange={(e) => onChange("estadoCivil", e.target.value)}
            />
          </div>
        </div>

        {/* Contacto */}
        <div className="d-flex justify-content-between align-items-center mt-4 border-bottom pb-2">
          <h5 className="mb-0">Datos Contacto</h5>
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Datos Contacto")}
          >
            Editar
          </button>
        </div>

        <div className="scroll-row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Número de Celular</label>
            <input
              type="text"
              className="form-control"
              value={dp.numeroCelular || ""}
              onChange={(e) => onChange("numeroCelular", e.target.value)}
            />
          </div>
          <div>
            <label className="form-label fw-bold">Numero Alterno</label>
            <input
              type="text"
              className="form-control"
              value={dp.numeroAlterno || ""}
              onChange={(e) => onChange("numeroAlterno", e.target.value)}
            />
          </div>
        </div>

        {/* Notificaciones */}
        <div className="scroll-row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              value={dp.correoElectronico}
              onChange={(e) => onChange("correoElectronico", e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">
              ¿Desea recibir notificaciones?
            </label>
            <input
              type="text"
              className="form-control"
              value={dp.recibirNotificaciones || ""}
              onChange={(e) =>
                onChange("recibirNotificaciones", e.target.value)
              }
            />
          </div>
        </div>

        {/* Direcciones */}
        <div className="d-flex justify-content-between align-items-center mt-4 border-bottom pb-2">
          <h5 className="mb-0">Direcciones</h5>
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Direcciones")}
          >
            Editar
          </button>
        </div>
        <div className="scroll-row">
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Región</label>
            <input
              type="text"
              className="form-control"
              value={dp.region || ""}
              onChange={(e) => onChange("region", e.target.value)}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label fw-bold">Comuna</label>
            <input
              type="text"
              className="form-control"
              value={dp.comuna || ""}
              onChange={(e) => onChange("comuna", e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label fw-bold">Calle</label>
          <input
            type="text"
            className="form-control"
            value={dp.calle || ""}
            onChange={(e) => onChange("calle", e.target.value)}
          />
        </div>

        <div className="scroll-row">
          <div className="col-md-3 mb-3">
            <label className="form-label fw-bold">Número</label>
            <input
              type="text"
              className="form-control"
              value={dp.numero || ""}
              onChange={(e) => onChange("numero", e.target.value)}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label fw-bold">Departamento</label>
            <input
              type="text"
              className="form-control"
              value={dp.departamento || ""}
              onChange={(e) => onChange("departamento", e.target.value)}
            />
          </div>
        </div>

        <div className="scroll-row">
          <div className="col-md-3 mb-3">
            <label className="form-label fw-bold">Villa</label>
            <input
              type="text"
              className="form-control"
              value={dp.villa || ""}
              onChange={(e) => onChange("villa", e.target.value)}
            />
          </div>
        </div>

        {/* Otros */}
        <div className="d-flex justify-content-between align-items-center mt-4 border-bottom pb-2">
          <h5 className="mb-0">Otros</h5>
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Otros")}
          >
            Editar
          </button>
        </div>
        <div className="scroll-row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">
              ¿Cómo se enteró de nosotros?
            </label>
            <input
              type="text"
              className="form-control"
              value={dp.comoSeEntero || ""}
              onChange={(e) => onChange("comoSeEntero", e.target.value)}
            />
          </div>
        </div>

        {/* Discapacidad */}
        <div className="d-flex justify-content-between align-items-center mt-4 border-bottom pb-2">
          <h5 className="mb-0">Discapacidad</h5>
          <button
            type="button"
            className="btn btn-outline-primary button-editar"
            onClick={() => alert("Editar sección de Discapacidad")}
          >
            Editar
          </button>
        </div>
        <div className="scroll-row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">
              ¿Posee alguna discapacidad?
            </label>
            <input
              type="text"
              className="form-control"
              value={dp.tieneDiscapacidad || ""}
              onChange={(e) => onChange("tieneDiscapacidad", e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">
              ¿Desea declarar su discapacidad?
            </label>
            <input
              type="text"
              className="form-control"
              value={dp.declararDiscapacidad || ""}
              onChange={(e) => onChange("declararDiscapacidad", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatosPersonales;
