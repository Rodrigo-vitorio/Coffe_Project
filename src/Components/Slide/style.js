import styled from "styled-components";

export const Container = styled.section`
  background-image: url("../../../imagens/coffe.png");
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 100px;
  @media (max-width: 780px) {
    padding: 50px;
    display: block;
    background-size: cover;
  }

  h1 {
    width: 30%;
    font-family: "Fraunces", serif;
    font-size: 38px;
    text-align: justify;
    @media (max-width: 780px) {
      font-size: 26px;
      margin-top: 20px;
    }
  }

  h3 {
    width: 33%;
    font-family: "Fraunces", serif;
    font-size: 20px;
    text-align: center;

    @media (max-width: 780px) {
      font-size: 18px;
      margin-top: 90px;
    }
  }
`;
