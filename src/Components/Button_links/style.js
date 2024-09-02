import styled from "styled-components";

export const Container = styled.section`
  background-image: url("../../../imagens/Background2.png");
  background-size: cover;
  background-position: center; 
  width: 100vw;
  height: auto;

  .link2 {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Para telas grandes */
    grid-template-rows: 1fr;
    gap: 10px; /* Adicione espaço entre as colunas, se necessário */

   
  }
`;
