/* styles.css */
import styled from "styled-components";

export const Container = styled.div`

  .link1 {
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 780px) {
      flex-direction: column;
    
    }
  }

  .link1 > .grao {
    background-image: url("../../../imagens/graoDCafé.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

   
  }

  .link1 > .especial {
    background-image: url("../../../imagens/cafeEspecial.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .link1 > .moido {
    background-image: url("../../../imagens/cafeEmPo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .link1 > .square {
    width: 100%;
    height: auto;
    margin: 10px 10px;
    border-radius: 10px;
    border: none;
    font-size: 30px;
    @media (max-width: 780px) {
      margin: 10px;
    }
  }

  .link1 > .square > p {
    font-family: ${({ theme }) => theme.FONTS.FRAUNCES};
    width: 30%;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.WHITE};
    white-space: nowrap;
    padding: 35px;
  }
`;
export const Analisar = styled.div`
  width: auto;
  height: auto;
  float: right;
  margin: 30px;
`;
