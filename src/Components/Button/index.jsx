import { Container } from "./Style";

export function Button({ title, to, ...rest }) {
  return (
    <Container to={to} {...rest}>
      <button>
        <a>{title}</a> 
      </button>
    </Container>
  );
}