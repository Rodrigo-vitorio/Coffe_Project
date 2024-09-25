import styled from "styled-components";

export const Container = styled.div`

`;

export const ImgUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  > label {
    > img {
      border-radius: 50%;
    width: 100%;
    height: 100%;
      
     
      background: white;
      margin: auto;
    }
    > input {
      display: none;
    }
  }
`;
