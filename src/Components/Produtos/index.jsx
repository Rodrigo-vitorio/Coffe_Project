import { Container, Imagem } from "./style";
import { Price } from "../Price";

export function Produtos({
  imagemUrl,
  description,
  price1,
  discount,
  buttonTitle
}) {
  return (
    <Container>
      <Imagem imagemUrl={imagemUrl} />
      <p>{description}</p>
      <Price price1={price1} discount={discount} buttonTitle={buttonTitle} />
    </Container>
  );
}
