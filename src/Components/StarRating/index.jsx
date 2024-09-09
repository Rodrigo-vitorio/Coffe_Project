import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Ícone de estrela cheia
import { Container } from "./style";

export function StarRating() {
  const [rating, setRating] = useState(null); // Guarda a avaliação
  const [hover, setHover] = useState(null); // Guarda o valor ao passar o mouse

  return (
    <Container>
      <div>
        {/* Array de 5 estrelas */}
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1; // Avaliação começa em 1

          return (
            <label key={index}>
              {/* Input escondido para capturar o clique */}
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
                style={{ display: "none" }}
              />
              {/* Ícones de estrela que mudam de cor conforme avaliação ou hover */}
              <FaStar
                size={30}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} // Estrela cheia ou vazia
                onMouseEnter={() => setHover(ratingValue)} // Passar o mouse
                onMouseLeave={() => setHover(null)} // Tirar o mouse
                style={{ cursor: "pointer", transition: "color 0.2s" }}
              />
            </label>
          );
        })}
        {/* Mostra a avaliação atual */}
        <p>Avaliação: {rating ? rating : "Nenhuma"}</p>
      </div>
    </Container>
  );
}
