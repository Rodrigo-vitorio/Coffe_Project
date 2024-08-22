import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;

  background: white;
  color: black;
  border-radius: 9px;
  >p{
    font-size: 16px;
    padding: 10px 60px;
  }
  >svg{
    font-size: 40px;
    margin-top: 30px;
  }
  >h2{
    font-size: 18px;
    margin-bottom: 30px;
  }
  
`;
