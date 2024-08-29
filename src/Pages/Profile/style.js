import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.section`
  position: relative;
`;

export const InputsInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 30%; 
  gap: 20px;

  .selectImg {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > div {
    display: flex;

    > input {
      flex: 1;
      width: 100%;
      height: 30px;
      margin: 0 5px;
      padding-left: 5px;
      font-size: 16px;
      color: white;
      background: transparent;
      border: none;
      border-bottom: 1px solid white;
      border-radius: 2px;
      outline: none;

      &:focus {
        border: 1px solid white;
      }

      &:disabled {
        background: gray;
        color: red;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 15px;
    padding: 150px;
  }
  @media (max-width: 480px) {
    padding: 50px;
    
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

  @media (max-width: 768px) {
    font-size: 14px;

    > p > input {
      width: 23px;
      height: 23px;
    }
  }

  @media (max-width: 480px) {
    font-size: 12px;

    > p > input {
      width: 20px;
      height: 20px;
    }
  }
`;
