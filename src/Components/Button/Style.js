import styled from "styled-components";

export const Container = styled.button`
  width: 100%;



  height: 49px;
  border: 0;
  padding: 8px;

  border-radius: 10px;
  font-weight: 500;
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};

  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    background: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.GREEN};
    border: solid green 1px;
    transition: cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s;
  }
`;
