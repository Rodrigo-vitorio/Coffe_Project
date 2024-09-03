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
   
  }

`;

export const Content = styled.div`
h1{
  margin: 30px 0 ;
  font-size: 32px;
}

svg{
  font-size: 22px;
}

`;

export const LinksAlt = styled.div`
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
    margin-right: 10px; // espaçamento entre o ícone e o texto
   color: ${({theme})=>theme.COLORS.BLUE_800};
    font-size: 1.5rem;
    
  }
 
 &:last-child{
  background:#E53E3E;
  >a{
    color: white;
  }
 }
`;
