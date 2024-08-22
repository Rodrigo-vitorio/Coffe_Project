import styled from "styled-components";

export const Container = styled.div`

`;

export const ImgUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  > label {
    > img {
      border-radius: 50%;
      width: 12rem;
      height: 12rem;
      
     
      background: white;
      margin: auto;
    }
    > input {
      display: none;
    }
  }
`;
