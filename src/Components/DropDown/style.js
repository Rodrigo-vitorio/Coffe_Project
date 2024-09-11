import styled from "styled-components";

export const Container = styled.div`
  color: white;

  nav {
    background: #333;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  nav ul {
    list-style-type: none;
    display: flex;
    color: white;
    padding: 0;
    margin: 0;
  }

  .teste ul {
    display: block;
  }

  nav li {
    margin: 0;
  }

  nav li a {
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    color: white;
    white-space: nowrap;
    @media (max-width: 768px) {
      font-size: 15px;
      padding: 12px 14px;
      
    }
    @media (max-width: 480px) {
      font-size: 13px;
      padding: 10px 3px ;
      

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
    @media (max-width: 480px) {
      padding-left: 0rem;

    }
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
      padding: 10px;
    }
  }

  .dropdown-content a:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE_800};
    color: whitesmoke;
  }

  h1 {
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONTS.FRAUNCES};
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.COLORS.BROWN_700};
    display: flex;
    align-items: center;
    gap: 5px;
    > svg {
      font-size: 18px;
    }
    @media (max-width: 768px) {
      font-size: 15px;
      padding: 10px 15px;
      > svg {
        font-size: 16px;
      }
    }
    @media (max-width: 480px) {
      font-size: 14px;
      padding: 5px 10px;
      > svg {
        font-size: 16px;
      }
    }
  }
`;
