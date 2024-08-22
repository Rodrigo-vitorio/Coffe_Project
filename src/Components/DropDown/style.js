import styled from "styled-components";
export const Container = styled.div`
  
  color: white;
  nav {
    background: #333;
    overflow: hidden;
    border-radius: 3px 3px 0 0;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  nav ul {
    list-style-type: none;
    display: flex;
  }
  .teste ul {
    display: block;
  }

  nav li a {
    display: block;
    color: #333;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    color: white;
  }

  nav li a:hover {
    background-color: #ddd;
  }
  .teste {
    display: flex;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;

    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  h1 {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    padding: 10px;
    background-color: #e6e6e6;
  }
`;
