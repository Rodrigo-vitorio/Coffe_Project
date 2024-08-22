import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 400px;
  background-image: url("../../../imagens/backgroundCofffePass.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin: 100px auto;

  > h3 {
    width: 500px;
    position: absolute;
    top: 30%;
    right: 20px;
    background: ${({ theme }) => theme.COLORS.BROWN_700};
    padding: 10px;
    border-radius: 10px;
    font-family: ${({ theme }) => theme.FONTS.ABHAYA_LIBRE};
    text-align: justify;
    font-size: 18px;
    font-weight: 300;
  }
  > h2 {
    position: absolute;
    top: 60%;
    right: 20px;
    font-weight: 300;
    font-size: 40px;
    font-family: ${({ theme }) => theme.FONTS.ABHAYA_LIBRE};
  }
  > Button {
    position: absolute;
    top: 80%;
    right: 20px;
    background: ${({ theme }) => theme.COLORS.BROWN_700};
    width: 150px;
  }
`;
export const Poligono = styled.div`
  width: 100%;
  height: 100%;
  clip-path: polygon(30% 0, 0 40%, 0 0);
  background: ${({ theme }) => theme.COLORS.BROWN_700};
  position: absolute;
  top: 0;
  left: 0;
`;
