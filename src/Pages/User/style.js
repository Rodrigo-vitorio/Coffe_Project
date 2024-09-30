import styled from "styled-components";

export const Container = styled.section`
  > main {
    margin: 40px auto;
    width: 80vw;
    background-image: url("../../../imagens/backgroundSignIn.png");
    padding: 50px;
    border-radius: 5px;
   
  }
`;
export const LinksInfo = styled.section`

`;

export const UserInfo = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
  > img {
    width: 10vw;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
export const ListItem = styled.li`
  list-style: none;
  height: 5rem;
  margin: 10px 0;
  background-color: #bfbfbf;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
 
 

  &:hover {
    background-color: #e2e6ea; 
    transform: scale(1.01);
  }

  a {
    display: flex;
    align-items: center;
    padding: 15px;
    text-decoration: none;
    color: #343a40;
    width: 100%;
    height: 100%;
  }

  svg {
    margin-right: 10px;
   color: ${({theme})=>theme.COLORS.BLUE_800};
    font-size: 1.5rem;
    
  }
`;
