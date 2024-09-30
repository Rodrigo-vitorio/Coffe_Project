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
  border-radius: 5px;
  margin: 20px;
  background: white;
  >h2{
    color: black;
  text-align: center;
  padding: 20px 10px;
  border-bottom: 1px solid black;
  user-select: none;
  }

  > ul {
    list-style-type: none;
    margin-top: 20px;
    background: white;
    > li {
      &:hover {
        background: #d9d9d9;
      }

      > a {
        color: #343a40;
        width: 100%;
        height: 100%;
        display: block;
        padding: 25px 30px;
      }
    }
    li.selected {
      background: #d9d9d9;
    }
  }
`;
export const Info = styled.section`
  grid-area: info;
  border-radius: 5px;
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
      > span {
        background: black;
        color: white;
        padding: 5px;
        border-radius: 5px;
      }
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

  border-radius: 5px;
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
  grid-area: orders;
  margin: 20px;
  border-radius: 5px;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  > table {
    border-collapse: collapse;
    margin: 20px;
    > th,
    td {
      border: 1px solid #ddd;
      padding: 8px 52px;
    } 
    thead tr th{
      padding-bottom:10px;
    }

  }

`;
