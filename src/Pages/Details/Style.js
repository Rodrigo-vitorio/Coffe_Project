import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 122px auto;
  grid-template-areas: "header" "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};

  .showProdutos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 30px 10px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 60px;
    }

    > img {
      height: 75%;
      width: 55%;
      margin: auto;

      @media (max-width: 768px) {
        height: 70%;
      }

      @media (max-width: 480px) {
        height: 80%;
        width: 80%;
      }
    }
  }

  .carrossel {
    width: 98vw;
    height: 500px;
    background-image: url("../../../imagens/backgroundBlogs.png");
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > h1 {
      color: black;
      font-size: 52px;
      margin-bottom: 50px;
      font-family: ${({ theme }) => theme.FONTS.ABHAYA_LIBRE};

      @media (max-width: 1200px) {
        font-size: 42px;
        margin-bottom: 40px;
      }
      @media (max-width: 900px) {
        font-size: 36px;
        margin-bottom: 35px;
      }
      @media (max-width: 768px) {
        font-size: 32px;
        margin-bottom: 30px;
      }
      @media (max-width: 480px) {
        font-size: 28px;
        margin-bottom: 20px;
      }
    }

    @media (max-width: 1200px) {
      height: 400px;
    }
    @media (max-width: 900px) {
      height: 350px;
    }
    @media (max-width: 768px) {
      height: 300px;
    }
    @media (max-width: 480px) {
      height: 250px;
    }
  }
`;
