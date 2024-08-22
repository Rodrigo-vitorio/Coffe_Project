import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.section`
  position: relative;
`;

export const InputsInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 30vw;
  gap: 20px;

  .selectImg {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  > div {
    display: flex;

    > input {
      font-size: 16px;
      flex: 1 100%;
      width: 100%;
      height: 30px;
      outline: none;
      border: none;
      border-bottom: 1px solid white;
      background: transparent;
      margin: 0px 5px;
      color: white;
      border-radius: 2px;
      padding-left: 5px;

      &:hover::placeholder {
      }

      &:focus {
        border: 1px solid white;
      }

      &:disabled {
        background: gray;
        color: red;
      }
    }
  }
`;

export const Check = styled.div`
  font-size: 16px;

  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    > input {
      width: 25px;
      height: 25px;
      margin-left: 20px;
    }
  }
`;
