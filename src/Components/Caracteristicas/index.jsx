import { Container } from "./style";

export function Caracteristicas({ title, info2, icon, ...rest }) {
  return (
    <Container {...rest}>
      {icon}
      <p> {title}</p>
      <h2>{info2} </h2>
    </Container>
  );
}
