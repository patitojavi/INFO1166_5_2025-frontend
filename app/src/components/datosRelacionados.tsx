import React from "react";

interface DatosRelacionadosProps {
  documentosRelacionados: string;
  onChange: (value: string) => void;
}
const DatosRelacionados: React.FC<DatosRelacionadosProps> = ({
  documentosRelacionados,
  onChange,
}) => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-info text-white">
        <h5 className="card-title">Datos Relacionados</h5>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label fw-bold">Documentos Relacionados</label>
          <input
            type="text"
            className="form-control"
            value={documentosRelacionados}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default DatosRelacionados;
