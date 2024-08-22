import React, { useState } from "react";
import { Container } from "./style";

export function Address() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 1,
      name: "Rodrigo Vitorio",
      email: "user@gmail.com",
      phone: "(75)99279-0493",
      address: "1ª Travessa Brigadeiro Alberto Costa Matos",
      city: "Lauro de Freitas",
      state: "Bahia",
    },
    {
      id: 2,
      name: "Ana Silva",
      email: "ana@gmail.com",
      phone: "(75)99999-0000",
      address: "2ª Avenida Brasil",
      city: "Salvador",
      state: "Bahia",
    },
    // Adicione mais opções conforme necessário
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <div className="link1">
        {options.map((option) => (
          <div key={option.id} className="square">
            <label htmlFor={`option-${option.id}`}>
              <p>
                <strong>Nome:</strong> {option.name}
              </p>
              <p>
                <strong>Email:</strong> {option.email}
              </p>
              <p>
                <strong>Telefone:</strong> {option.phone}
              </p>
              <p>
                <strong>Endereço:</strong> {option.address}
              </p>
              <p>
                <strong>Cidade:</strong> {option.city}
              </p>
              <p>
                <strong>Estado:</strong> {option.state}
              </p>
            </label>
            <h3>
              <input
                type="checkbox"
                id={`option-${option.id}`}
                name="options"
                value={option.id}
                checked={selectedOption === option.id.toString()}
                onChange={handleChange}
              />
              Esse é o endereço principal
            </h3>
          </div>
        ))}
      </div>
    </Container>
  );
}
