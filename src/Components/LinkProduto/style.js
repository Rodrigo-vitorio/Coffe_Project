import styled from "styled-components";

export const Container = styled.button`
  width: 200px; /* ajuste conforme necessário */
  height: 300px; /* ajuste conforme necessário */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: none;
`;
export const Imagem = styled.div`
  width: 200px; /* ajuste conforme necessário */
  height: 200px; /* ajuste conforme necessário */
  background-image: url(${(props) => props.imagemUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 15px; /* espaço entre imagem e texto */
  border: none;
  border-radius: 50%;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 3s;
  &:hover{
    transform: scale(1.1);
   }
`;
export const Texto = styled.div`
  text-align: center;
  font-size: 12px; /* ajuste conforme necessário */
  color: red;
`;
