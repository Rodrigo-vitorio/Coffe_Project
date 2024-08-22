import styled from "styled-components";

export const Container = styled.section`
  background-image: url("../../../imagens/coffe.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: start;
  position: relative;
  

  h1 {
    width: 308px;
    height: 147px;
    font-family: "Fraunces", serif;
    font-size: 40px;
    position: absolute;
    top: 120px;
    left: 70px;
  }

  h3 {
    width: 267px;
    height: 111px;
    font-family: "Fraunces", serif;
    font-size: 20px;
    position: absolute;
    top: 150px;
    right: 70px;
  }
  
`;
