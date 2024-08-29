import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  border: 1px double #dddddd;
  margin: 20px auto;
  padding: 10px;

  > p {
    font-family: ${({ theme }) => theme.FONTS.ABHAYA_LIBRE};
    font-size: 22px;
    font-weight: 600;
    width: 100%; 
    margin: auto;
    padding-top: 20px;
    
  }
`;

export const Imagem = styled.div`
  width: 100%;
  max-width: 15rem; /* Limita a largura máxima */
  height: 250px;
  background-image: url(${(props) => props.imagemUrl});
  background-size: cover;
  background-position: center;
  border: none;
  transition: transform 0.5s ease;
  margin: auto;

  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 900px) {
    height: 200px; /* Reduz a altura em telas menores */
  }

  @media (max-width: 768px) {
    height: 180px; /* Mais redução para telas ainda menores */
  }
`;
