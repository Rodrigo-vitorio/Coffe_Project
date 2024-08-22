/* styles.css */
import styled from "styled-components";

export const Container = styled.div`
  
  .link1 {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .link1 > .grao {
    background-image: url("../../../imagens/graoDCafé.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
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
    width: 400px;
    height: 250px;
    margin: 66px 0 40px 0;
    border-radius: 10px;
    border: none;
    font-size: 30px;
  }

  .link1 > .square > p {
    font-family: ${({ theme }) => theme.FONTS.FRAUNCES};
    width: 113px;
    text-align: left;
    margin: 25px 0 44px 22px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  }
`;
export const Analisar = styled.div`
  width: 150px;
  height: 34px;
  position: absolute;
  right: 10px;
`;
