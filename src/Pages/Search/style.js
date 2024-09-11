import styled from "styled-components";

export const Container = styled.section`
overflow: hidden;
`;

export const Content = styled.section`
  > main {
    display: grid;
    grid-template-areas: "filter item"; /* Define duas áreas: uma para filtros e outra para itens */
    grid-template-columns: 1fr 3fr; /* Define a largura das colunas */
    background-color: white;
  }
`;

export const Filters = styled.section`
  grid-area: filter; /* Define a área do grid para filtros */
  margin: 30% auto;
  padding: 20px;

  > ul {
    margin-bottom: 30px;
  }
  > ul > h3 {
    font-size: 23px;
    color: black;
    font-family: ${({ theme }) => theme.FONTS.FRAUNCES};
    margin-bottom: 20px;
    @media (max-width: 1200px) {
      font-size: 18px;
    }
    @media (max-width: 900px) {
      font-size: 16px;
    }
    @media (max-width: 768px), (max-width: 480px) {
      font-size: 15px;
    }
  }
  > ul > li {
    margin-bottom: 10px;
    &:hover {
      transform: scale(1.01);
    }
  }
  ul > li > a {
    color: black; /* Cor dos links não visitados */
    text-decoration: none; /* Remove o sublinhado */
    font-size: 18px;
    white-space: pre-wrap;

    &:visited {
      color: black; /* Cor dos links visitados */
    }

    &:active {
      color: black; /* Cor dos links quando estão sendo clicados */
    }
    @media (max-width: 1200px) {
      font-size: 16px;
    }
    @media (max-width: 900px) {
      font-size: 16px;
    }
    @media (max-width: 768px), (max-width: 480px) {
      font-size: 15px;
    }
  }
`;

export const Itens = styled.section`
  grid-area: item; /* Define a área do grid para itens */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 30px 10px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 60px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 60px;
  }

`;
