import styled from "styled-components";

export const Container = styled.div`

`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .menu {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }
  

  .menu-button {
 
   font-size: 30px;
   display: flex;
   align-items: center;
   justify-content: center;

  }

  .menu.active {
    opacity: 1;
    visibility: visible;
  }
  >nav{
    >ul{
        list-style: none;
        margin-left: 10px;
    }
  }
`;
