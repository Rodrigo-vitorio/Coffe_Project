import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 5px;
  box-shadow: 0px 5px 5px -6px rgba(0, 0, 0, 0.75);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  
`;

export const Imagem = styled.img`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.imagemUrl});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-bottom: 15px; /* espaço entre imagem e texto */
`;

export const Texto = styled.div`
  > h1 {
    font-family: ${({ theme }) => theme.FONTS.OSWALD};
    font-size: 22px;
    color: black;
    padding: 2px;
    text-align: center;
    font-weight: 500;
    
  }
`;
