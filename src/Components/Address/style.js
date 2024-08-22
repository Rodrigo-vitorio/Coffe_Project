import styled from 'styled-components';

export const Container = styled.div`
overflow-y: scroll;
height: 50vh;
  .link1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: black;
  }

  .square {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    background-color: #f9f9f9;
    >h3{
      font-size: 18px;
     margin-top: 5px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      >input{
        
        width: 20px;
        height: 20px;
       
      }
    }
  }
`;
