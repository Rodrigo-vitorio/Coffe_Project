import styled from "styled-components";

export const Container = styled.section`
  background-image: url("../../../imagens/Background2.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;

  .link2 {
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    grid-template-rows: 1fr;
    gap: 12px; 
    @media (max-width: 1200px) {
      gap: 0; 
  }
    @media (max-width: 780px) {
      grid-template-columns: repeat(5, 1fr); /* Para telas grandes */
      gap: 0; 
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 0; 
    }
  }
`;
