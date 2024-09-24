import styled from "styled-components";

export const Container = styled.section`

  > main {
    background: #D9D9D9;
    width: 96vw;
    margin: auto;
    display: grid;
    grid-template-areas:
      "sidebar   info"
      "sidebar   users"
      "sidebar   orders";
  }
`;
export const Sidebar = styled.section`
 grid-area: sidebar; /* Liga o elemento à área definida */
  
`;
export const Info = styled.section`
 grid-area: info; /* Liga o elemento à área definida */
 background: red;
 display: grid;
 grid-template-columns:repeat(2,1fr);
 .square{
    width: 100%;
    height: 300px;
 }


`;
export const Users = styled.section`
 grid-area: users; /* Liga o elemento à área definida */


`;
export const Orders = styled.section`
 grid-area: orders; /* Liga o elemento à área definida */


`;
