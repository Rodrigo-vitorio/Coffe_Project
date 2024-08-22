import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: black;

  display: grid;
  grid-template-rows: 120px auto;
  grid-template-areas:
    "header"
    "content";
  
  > main {
    grid-area: content;
  }
`;

export const Content = styled.div`
  padding: 10px 20px;
`;

export const CarrinhoProd = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; 
  grid-template-rows: auto 1fr ; 
  grid-template-areas:
    "subtotal total"
    "subtotal total"
  ; /* Total no topo e Subtotais embaixo */
  gap: 20px; /* Espaçamento entre itens */
`;

export const Subtotal = styled.div`
grid-area: subtotal;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px; 
 

  > img {
    width: 100px; 
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px; 

    > h3 {
      font-size: 16px; 
    }

    > h2 {
      font-size: 20px; 
      font-family: ${({ theme }) => theme.FONTS.MARVEL};
    }

    .info2 {
      display: flex;
      flex-direction: column;
      gap: 10px; 

      .quantity {
        display: flex;
        align-items: center;
        gap: 10px; /* Espaçamento entre os botões e o contador */
      }
    }
  }
`;

export const Total = styled.div`
grid-area: total;

  background: white;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  grid-area: 1 / 2 / 2 / 3;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    > svg {
      font-size: 52px;
    }

    > p {
      font-size: 16px;
      text-align: justify;
      margin-left: 5px;
    }
  }

  > p {
    font-size: 16px;
    margin-bottom: 5px;

    &:nth-child(5) {
      margin-bottom: 10px;
    }
  }
`;
