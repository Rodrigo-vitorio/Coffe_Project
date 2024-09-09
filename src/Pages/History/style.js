import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 122px auto;
  grid-template-areas: "header" "content";

  > main {
    margin: 40px auto;
    width: 80vw;
    background-image: url("../../../imagens/backgroundSignIn.png");
    padding: 50px;
    border-radius: 5px;

    @media (max-width: 1024px) {
      width: 90vw;
      padding: 40px;
    }

    @media (max-width: 768px) {
      width: 60vw;
      padding: 30px;
    } 

    @media (max-width: 480px) {
      width: 100vw;
      padding: 20px;
      margin: 20px auto;
    }
  }
`;

export const Content = styled.section`
  > ul {
    list-style-type: none;
  }
  .info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: white;
    color: black;
    padding: 10px 30px;
    margin: 10px 0 ;
    .desc>p{
        font-size: 16px;
        margin: 9px 5px;
    }
    .infoID>p{
        font-size: 16px;
        margin: 9px 5px;
    }
    
    
  }
  @media (max-width: 768px) {
      .info{
        flex-direction: column;
      }
    }
`;
