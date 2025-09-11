import React from "react";

interface DatosCVProps {
  formatoCV: string;
  onChange: (value: string) => void;
}

const DatosCV: React.FC<DatosCVProps> = ({ formatoCV, onChange }) => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-success text-white">
        <h5 className="card-title">Generar CV</h5>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label fw-bold">Formato de CV</label>
          <input
            type="text"
            className="form-control"
            value={formatoCV}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Descargar CV</button>
      </div>
    </div>
  );
};

export default DatosCV;
