import styled from "styled-components";

export const Container = styled.div`
  color: black;
  display: grid;
  margin: auto;
  width: 100%;

  > .price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;

    > h3 {
      font-size: 30px;
      font-family: ${({ theme }) => theme.FONTS.MARVEL};
      width: 100%;
      white-space: nowrap;

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
    width: 60px;
    height: 22px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    > .price {
      flex-direction: column;
      align-items: flex-start;
      
      > h3 {
        font-size: 24px;
        
        > span {
          font-size: 8px;
        }
      }
    }

    > p {
      font-size: 14px;
      width: auto;
    }
  }

  @media (max-width: 480px) {
    > .price {
      > h3 {
        font-size: 20px;

        > span {
          font-size: 7px;
        }
      }
    }

    > p {
      font-size: 12px;
    }
  }
`;
