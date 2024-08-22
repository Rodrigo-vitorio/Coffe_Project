import { Container } from "./style";

export function Slide({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
