import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 122px auto;
  grid-template-areas: "header" "content";

  > main {
    margin: 40px auto;
    width: 80vw;
    background-image: url("../../../imagens/backgroundSignIn.png");
    padding: 50px;
    border-radius: 5px;

    @media (max-width: 1024px) {
      width: 90vw;
      padding: 40px;
    }

    @media (max-width: 768px) {
      width: 95vw;
      padding: 30px;
    }

    @media (max-width: 480px) {
      width: 100vw;
      padding: 20px;
      margin: 20px auto;
    }
  }
`;

export const Content = styled.div`
  h1 {
    margin: 30px 0;
    font-size: 32px;

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  svg {
    margin-left: 5px;
    font-size: 32px;

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const LinksAlt = styled.div`
  list-style: none;
  height: 5rem;
  margin-top: 10px;
  background-color: #bfbfbf;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #e2e6ea;
    transform: scale(1.01);
    cursor: pointer;
  }

  p {
    display: flex;
    align-items: center;
    padding: 15px;
    text-decoration: none;
    color: #343a40;
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      padding: 12px;
    }

    @media (max-width: 480px) {
      padding: 10px;
    }
  }

  svg {
    margin-right: 10px;
    color: ${({ theme }) => theme.COLORS.BLUE_800};
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const Hiddem = styled.div`
  .check {
    display: flex;
    align-items: center;
    background-color: #bfbfbf;
    padding: 20px;
    gap: 20px;

    @media (max-width: 768px) {
      padding: 15px;
      gap: 15px;
    }

    @media (max-width: 480px) {
      padding: 10px;
      gap: 10px;
      flex-direction: column;
      align-items: flex-start;
    }

    p {
      color: black;

      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    @media (max-width: 480px) {
      width: 50px;
      height: 28px;
    }
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.COLORS.BLUE_800};
    -webkit-transition: 0.4s;
    transition: 0.4s;

    @media (max-width: 480px) {
      border-radius: 28px;
    }
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    @media (max-width: 480px) {
      height: 20px;
      width: 20px;
    }
  }
  input:checked + .slider {
    background-color: ${({ theme }) => theme.COLORS.GREEN};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${({ theme }) => theme.COLORS.GREEN};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
  }
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
