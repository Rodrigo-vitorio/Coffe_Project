import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

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
  color: black;
`;

export const CarrinhoProd = styled.div``;
export const Subtotal = styled.div`
  background: white;
  width: 65vw;
  display: flex;
  padding: 40px;

  .info {
    > h3 {
      font-size: 22px;
      font-family: ${({ theme }) => theme.FONTS.OSWALD};
      font-weight: 400;
      margin-bottom: 5px;
    }
    > h2 {
      font-size: 22px;
      font-family: ${({ theme }) => theme.FONTS.OSWALD};
      font-weight: 300;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  > img {
    width: 30%;
    height: 100%;
    @media (max-width: 768px) {
    width: 50%;
    
    
  }
  }

  .info2 {
    .quantity {
      border: 1px solid ${({ theme }) => theme.COLORS.BROWN_800};
      width: 88px;
      margin-bottom: 30px;
    }
    .bttn {
      padding: 0 10px;
      margin: 5px;
      font-size: 20px;
      border: none;
      background: transparent;
    }
    .add {
      color: green;
    }
    button {
      padding: 7px;
      font-family: "Roboto", sans-serif;
      margin-right: 20px;
      border-radius: 5px;
      border: 1px solid gray;
      &:hover {
        transform: scale(1.1);
      }
      @media (max-width: 768px) {
        margin-top: 5px;
      }
    }

    button.compartilhar:hover {
      background-color: ${({ theme }) => theme.COLORS.BLUE_600};
      color: white;
    }
    button.excluir:hover {
      background-color: #ff0000;
      color: white;
    }
  }
`;
export const Total = styled.div`
  padding: 20px;
  width: 25vw;
  background: white;
  height: 100%;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 17px;
    > svg {
      font-size: 50px;
    }
  }
  > p {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: center;
    gap: 20px;
  }
`;
export const CarrinhoG = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 20px;
  @media (max-width: 768px) {
    display: block;
  }
`;
