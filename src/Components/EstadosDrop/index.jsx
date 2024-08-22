import React, { useState } from "react";
import { Container } from "./style";

const estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas", 
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
  "Distrito Federal",
];

 export const EstadoDrop = () => {
  const [selectedEstado, setSelectedEstado] = useState("");

  const handleChange = (event) => {
    setSelectedEstado(event.target.value);
  };

  return (
    <Container>
      <div className="dropdown-container">
        <select
          value={selectedEstado}
          onChange={handleChange}
          className="dropdown-select"
        >
          <option value="" disabled>
            Selecione o seu estado
          </option>
          {estados.map((estado, index) => (
            <option key={index} value={estado}>
              {estado}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
};


