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
    background-image: url("../../../imagens/backgroundSignIn.png");
  }
`;

export const Content = styled.div`
  .formulario {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    margin-bottom: 100px;
  }
  .container {
    background-color: #4D4D4D;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 30%;
  }

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .btn-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }

  button {
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    &:hover{
      transform: scale(1.1);
      transition: cubic-bezier(0.23, 1, 0.320, 1)1s;
    }
  }

  .facebook {
    background-color: #3b5998;
    color: #fff;
    text-align: center;
    > svg {
      font-size: 15px;
    }
  }

  .google {
    background-color: #dd4b39;
    color: #fff;
    > svg {
      font-size: 18px;
    }
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 16px;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  }

  .forgot {
    display: block;
    text-align: justify;
    margin: 20px auto;
    font-size: 14px;
    color: white;
    width: 340px;
  }

  .sign-in:hover {
    background-color: #0069d9;
  }

  .signup {
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    color: white;
  }

  .signup a {
    color: #4682B4;
    text-decoration: none;
  }

  .signup a:hover {
    text-decoration: underline;
  }
`;
