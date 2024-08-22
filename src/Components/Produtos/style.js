import styled from "styled-components";

export const Container = styled.button`
  width: 300px;
  height: 455px;
  background: transparent;
  border: none;
  margin: 40px auto;

  > p {
    font-family: ${({ theme }) => theme.FONTS.ABHAYA_LIBRE};
    font-size: 22px;
    font-weight: 600;
    width: 52vh;
    margin: auto;
    padding-top: 20px;
   
  }
`;
export const Imagem = styled.div`
  width: 250px;
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

  
`;
