import styled from "styled-components";
export const Container = styled.div`
  color: white;
  nav {
    background: #333;
    overflow: hidden;

    display: flex;
    justify-content: start;
    align-items: center;
  }

  nav ul {
    list-style-type: none;
    display: flex;
    color: white;
  }
  .teste ul {
    display: block;
  }

  nav li a {
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    color: white;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  nav li a:hover {
    background-color: ${({ theme }) => theme.COLORS.BROWN_700};
  }
  .teste {
    display: flex;
   
  }
  .dropdown:first-child {
    padding-left: 1rem;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;

    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    font-family: ${({ theme }) => theme.FONTS.OSWALD};
    @media (max-width: 768px) {
      font-size: 14px;
      padding: 12px;
    }
  }

  .dropdown-content a:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE_800};
    color: whitesmoke;
  }

  h1 {
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONTS.FRAUNCES};
    padding: 10px 10px 10px 20px;
    background-color: ${({ theme }) => theme.COLORS.BROWN_700};
    display: flex;
    align-items: center;
    gap: 5px;
    > svg {
      font-size: 18px;
    }
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
