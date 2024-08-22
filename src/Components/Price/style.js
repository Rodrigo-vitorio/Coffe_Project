import styled from "styled-components";

export const Container = styled.div`
  color: black;
  display: grid;
  margin: auto;


  > .price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    > h3 {
      font-size: 30px;
      font-family: ${({ theme }) => theme.FONTS.MARVEL};
      width: 100%;
      
      
      > span {
        font-size: 12px;
        text-align: start;
        font-weight: lighter;
      }
    }
  }
  > p {
    font-size: 16px;

    text-decoration: line-through;
    font-family: ${({ theme }) => theme.FONTS.STARDOS_STENCIL};
    width: 60px;
    height: 22px;
    margin-bottom: 10px;
  }
`;
