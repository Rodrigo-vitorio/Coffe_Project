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
    width: 100%;
    height: 100%;
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
    @media (max-width: 768px), (max-width: 480px) {
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
`;
