import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.BROWN_700};
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 30px;
    margin: auto;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    margin: 0 20px;
  }

  > .links {
    list-style: none;
    font-size: 16px;
    > li {
      margin-bottom: 20px;
      > h3 {
        color: black;
        font-size: 22px;
      }
      > a {
        color: black;
        &:hover {
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }
    }
    > .icons {
      > svg {
        font-size: 36px;
        margin-left: 10px;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.COLORS.BLUE_800};
        }
      }
    }
    > .pagamentos {
      > svg {
        font-size: 36px;
        margin: 0 4px;
      }
    }
  }
  
`;
export const Logo = styled.div`
  display: flex;
  align-items: start;

  > img {
    width: 7rem;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
