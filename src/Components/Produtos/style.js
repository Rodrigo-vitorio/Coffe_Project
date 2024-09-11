import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  border: 1px double #dddddd;
  margin: 20px auto;
  padding: 10px;

  >p {
    font-family: ${({ theme }) => theme.FONTS.ABHAYA_LIBRE};
    font-size: 22px;
    font-weight: 600;
    width: 100%;
    margin: auto;
    padding-top: 20px;
   
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
`;

export const Imagem = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${(props) => props.imagemUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease;
  margin: auto;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    height: 280px;
  }

  @media (max-width: 768px) {
    height: 280px;
    
  }

  @media (max-width: 600px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`;
