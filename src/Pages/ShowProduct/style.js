import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
height: 100vh;
  display: grid;
  grid-template-rows: 120px auto;
  grid-template-areas: "header" "content";
  > main {
    grid-area: content;
    overflow-y: scroll;
    overflow-x: hidden;
    
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-areas:
    "produto  info"
    "produto frete"
    "info2 info2";
  margin-top: 50px;
  .image {
    width: 55vw;
    height: auto;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    border-radius: 5px;

    > img {
      width: 80%;
      height: 100%;
    }
  }
  .info {
    background: white;
    padding: 40px 20px;
    margin: auto 10px;
    color: black;
    border-radius: 5px;
    .infoName {
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: center;

      > h3 {
        font-size: 22px;
        font-family: ${({ theme }) => theme.FONTS.ABHAYA_LIBRE};
      }
      > a {
        > svg {
          font-size: 30px;
          color: black;
          margin-right: 5px;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
    .price {
      > h1 {
        font-size: 42px;
        font-family: ${({ theme }) => theme.FONTS.MARVEL};
        margin: 22px;
      }
      .desconto {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin-bottom: 10px;
        > p {
          font-size: 16px;
        }
        > svg {
          font-size: 25px;
        }
      }
    }
    > a {
      color: ${({ theme }) => theme.COLORS.BROWN_800};
    }

    > .stars {
      display: flex;
      align-items: center;
      justify-content: start;
      margin: 10px 0 60px 0;
      > svg {
        font-size: 23px;
      }
    }
    .quant {
      display: flex;
      margin-bottom: 10px;
    }

    .quantity {
      border: 1px solid #ccc;
      padding: 5px;
      display: flex;
      align-items: center;
    }

    .quantity button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.2em;
      padding: 0 15px;
    }

    > p {
      text-align: justify;
      width: 80%;
      margin: 0px auto;
      font-size: 16px;
    }
  }

  .add-to-cart {
    background-color: #a5816e;
    color: white;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    font-size: 18px;
  }

  .frete {
    width: 500px;
    height: 215px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-area: frete;
    margin: 30px auto;
    border-radius: 5px;

    > h1 {
      color: black;
    }
    > .calcular {
      > button {
        font-size: 22px;
        font-family: ${({ theme }) => theme.FONTS.ABHAYA_LIBRE};
        padding: 12px 62px;
        background: ${({ theme }) => theme.COLORS.BLUE_600};
        color: white;
        border: none;
      }

      > input {
        height: 40px;
        width: 120xp;
        margin: auto;
        border: 1px solid;
        border-color: ${({ theme }) => theme.COLORS.BLUE_600};
      }
    }
  }
  > .infoCaract {
    grid-area: info2;
    margin: auto;
    > .caract {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 15px;
      grid-row-gap: 12px;
      > .div1 {
        grid-area: 1 / 1 / 2 / 2;
      }
      > .div2 {
        grid-area: 1 / 2 / 2 / 3;
      }
      > .div3 {
        grid-area: 1 / 3 / 2 / 4;
      }
      > .div4 {
        grid-area: 1 / 4 / 2 / 5;
      }
      > .div5 {
        grid-area: 1 / 5 / 2 / 6;
      }
      > .div6 {
        grid-area: 2 / 1 / 3 / 3;
      }
      > .div7 {
        grid-area: 2 / 3 / 3 / 4;
      }
      > .div8 {
        grid-area: 2 / 4 / 3/ 6;
      }
    }
  }
`;

export const Preparation = styled.div`
  background: white;
  padding: 30px;
  border-radius: 5px;
  color: black;
  margin: 20px 0;

  > h2 {
    text-align: center;
    margin-bottom: 47px;
  }
  > ul {
    line-height: 30px;
    list-style-type: decimal;
  }
`;
