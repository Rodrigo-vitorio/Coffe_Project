import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
>button{
  width: 100%;
    height: 46px;
    padding: 8px;
    background: ${({ theme }) => theme.COLORS.BLUE_800};
    
    border-radius: 8px;
    font-weight: 400;
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    &:disabled {
      opacity: 0.5;
    }
    &:hover {
      background: ${({ theme }) => theme.COLORS.GREEN};
      transition: 0.6s;
    }
  > a {
    color: white;
    text-align: center;
    white-space: nowrap;

    
  }

  @media (max-width: 480px) {
    height: 39px;
    font-size: 15px;
  }
}
 
`;
