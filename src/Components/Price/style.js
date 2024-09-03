import styled from "styled-components";

export const Container = styled.div`
  color: black;
  display: grid;
  width: 100%;

  > .price {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    @media (max-width: 600px) {
      display: block;
      >h3{
        text-align: left;
        margin-bottom: 5px;
      }
    }

    > h3 {
      font-size: 30px;
      font-family: ${({ theme }) => theme.FONTS.MARVEL};
      width: 100%;
      white-space: nowrap;
      @media (max-width: 480px) {
        font-size: 16px;
      }

      > span {
        font-size: 10px;
        text-align: start;
        font-weight: lighter;
      }
    }
  }

  > p {
    font-size: 16px;
    text-decoration: line-through;
    font-family: ${({ theme }) => theme.FONTS.STARDOS_STENCIL};
    width: 30%;
    height: 22px;
    margin-bottom: 10px;
    @media (max-width: 480px) {
      font-size: 12px;
      margin-bottom: 0;
    }
  }
`;
