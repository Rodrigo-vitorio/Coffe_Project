import { Container, Poligono } from "./style";
import { Button } from "../Button";

export function CoffePass() {
  return (
    <Container>
      <Poligono />
      <h3>
        Desfrute do melhor café todos os dias com o nosso Coffee Pass ! Tenha
        acesso ilimitado aos nossos deliciosos cafés especiais e torne suas
        manhãs ainda mais saborosas.
      </h3>
      <h2>Coffee Pass Exclusivo da Nossa Loja!</h2>
      <Button title={"Saiba mais"}/>
    </Container>
  );
}
