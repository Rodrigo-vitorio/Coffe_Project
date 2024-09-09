import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.BROWN_700};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  height: auto;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
  
    display: flex;
    
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
      display: flex;

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
      display: flex;

      > svg {
        font-size: 36px;
        margin: 0 4px;
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: flex-start;

  > img {
    width: 7rem;
    border-radius: 50%;
  }
`;
