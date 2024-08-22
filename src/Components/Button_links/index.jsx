import { Container } from "./style";

export function Button_links({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
