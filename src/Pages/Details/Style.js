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
    gap: 10px; /* Use 'gap' para controle uniforme dos espaçamentos */
    margin: 30px 10px;

    > img {
      width: 90%;
      height: 90%;
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
    }
  }

  /* Media Queries para Responsividade */
  @media (max-width: 1024px) {
    .showProdutos {
      grid-template-columns: repeat(3, 1fr);
    }

    .carrossel {
      height: 400px;

      > h1 {
        font-size: 42px;
        margin-bottom: 40px;
      }
    }
  }

  @media (max-width: 768px) {
    .showProdutos {
      grid-template-columns: repeat(2, 1fr);
    }

    .carrossel {
      height: 300px;

      > h1 {
        font-size: 36px;
        margin-bottom: 30px;
      }
    }
  }

  @media (max-width: 480px) {
    .showProdutos {
      grid-template-columns: 1fr;
      margin-top: 60px;
    }

    .carrossel {
      height: 250px;

      > h1 {
        font-size: 28px;
        margin-bottom: 20px;
      }
    }
  }
`;
