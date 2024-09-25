import styled from "styled-components";

export const Container = styled.section`
  > main {
    background: #d9d9d9;
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

  margin: 20px;
  background: white;

  >ul{
    list-style-type: none;
    margin-top: 20px;
    background: white;
    >label{
      padding: 30px;
    }
    >li{
     padding: 30px;
     &:hover{
      background: #D9D9D9;
     }
     >a{
      width: 100%;
      display: block;
      height: 100%;
      color: red;
      text-align: center;
     }
    }
  }
`;
export const Info = styled.section`
  grid-area: info; /* Liga o elemento à área definida */

  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  .square {
    width: 50%;
    height: 300px;
    background: white;
    > p {
      padding: 10px;
      margin-left: 50px;
      color: black;
      font-size: 1rem;
    }
  }
  .square:last-child {
    width: 100%;
  }
`;
export const Users = styled.section`
  grid-area: users; /* Liga o elemento à área definida */
  background: white;
  margin: 20px;

  border-radius: 10px;
  > h1 {
    color: black;
    padding: 20px 20px 0 20px;
    font-size: 30px;
  }
  > ul {
  padding: 0 20px 80px 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    > li {
      width: 150px;
      height: 150px;
     
      
      > p {
        margin-top: 5px;
        color: black;
        text-align: center;
        &:last-child {
          background: black;
          border-radius: 5px;
          padding: 5px;
          color: white;
        }
      }
      > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
`;
export const Orders = styled.section`
  grid-area: orders; /* Liga o elemento à área definida */
`;
