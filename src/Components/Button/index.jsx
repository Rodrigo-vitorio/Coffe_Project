import { Container } from "./Style";

export function Button({ title, ...rest }) {
  return (
    <Container type="Button" {...rest}>
     <a href="">{title}</a> 
    </Container>
  );
}
