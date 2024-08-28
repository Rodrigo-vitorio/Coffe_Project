import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 49px;

  padding: 8px;
  background: ${({ theme }) => theme.COLORS.BLUE_800};
  border-radius: 10px;
  font-weight: 500;
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

  > a {
    color: white;
  }

  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    background: ${({ theme }) => theme.COLORS.GREEN};
    transition: .6s;
  }
`;
