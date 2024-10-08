import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 122px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BROWN_700};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 94px;
  }

  @media (max-width: 480px) {
    height: 80px;
    padding: 0 10px;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 40px;
    @media (max-width: 780px) {
      padding: 0 20px;
    }
    @media (max-width: 780px) {
      padding: 0 10px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;

  > img {
    width: 4rem;
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 3rem;
    }

    @media (max-width: 480px) {
      width: 2rem;
    }
  }
`;

export const Bar = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: auto 10px;
  }

  li {
    a {
      position: relative;
      text-decoration: none;
      color: white;
      font-size: 18px;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 1px;
        background-color: ${({ theme }) => theme.COLORS.BROWN_700};
        transition: width 0.9s cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      &:hover::after {
        width: 100%;
      }
      @media (max-width: 768px) {
        font-size: 16px;
      }
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;

export const Search = styled.div`
  width: 50%;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 10px;

  @media (max-width: 768px) {
    width: 50%;
    &.active {
      flex: 100%;
    }
  }

  @media (max-width: 480px) {
    width: 50%;
    &.active {
      flex: 100%;
    }
  }

  > input {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
    padding: 10px 10px 10px 10px;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }

  > svg {
    position: absolute;
    right: 20px;
    color: #999;
    font-size: 25px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  >a{
    > svg {
    font-size: 45px;
    color: white;
    @media (max-width: 768px) {
      font-size: 2rem;
      margin: 0 10px;
      &:hover {
        color: ${({ theme }) => theme.COLORS.BROWN_700};
      }
    }
  }
  }

  > .user {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 200px;
    padding: 10px;

    @media (max-width: 768px) {
      display: none;
    }

    > h1 {
      font-size: 25px;

      @media (max-width: 768px) {
        display: none;
      }

      @media (max-width: 480px) {
        font-size: 18px;
      }
    }

    > .links {
      display: flex;

      > h3 {
        font-size: 15px;
        font-weight: 300;
        margin-left: 5px;

        @media (max-width: 768px) {
          display: none;
        }

        > a {
          text-decoration: none;
          color: white;

          &:hover {
            color: ${({ theme }) => theme.COLORS.BROWN_700};
          }
        }
      }
    }
  }
`;
export const Icone = styled.div`
  > a {
    > svg {
      font-size: 3rem;
      cursor: pointer;
      color: white;
      &:hover {
        color: ${({ theme }) => theme.COLORS.BROWN_700};
      }
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;
