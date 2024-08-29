import styled from "styled-components";

export const Container = styled.section`
  background-image: url("../../../imagens/Background2.png");
  background-size: cover;
  background-position: center; /* Adicionei isso para garantir que a imagem de fundo esteja centralizada */

  width: 100vw;
  height: auto;

  .link2 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    gap: 1px; 
    
    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 400px) {
      grid-template-columns: 1fr;
    }
  }
`;
