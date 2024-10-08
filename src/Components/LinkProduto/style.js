import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  border-radius: 5px;
  background: transparent;


 
`;

export const Imagem = styled.img`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.imagemUrl});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 1200px) {
    width: 150px;
    height: 150px;
    margin-bottom: 5px;
  }
  @media (max-width: 780px) {
    width: 80px;
    height: 80px;
    margin-bottom: 5px;
    }
 
`;

export const Texto = styled.div`
    white-space: nowrap;

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.OSWALD};
    font-size: 22px;
    color: black;
    padding: 2px;
    text-align: center;
    font-weight: 500;
    @media (max-width: 780px) {
      font-size: 16px;
      font-weight: 400;
    }
  
    @media (max-width: 480px) {
      font-size: 16px;
    font-weight: 400;

    }
  }
`;
