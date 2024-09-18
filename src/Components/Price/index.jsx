import { Container } from "./style";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export function Price({ price1, discount, buttonTitle }) {
  return (
    <Container>
      <p>{discount}</p>
      <div className="price">
        <h3>
          {price1} <span>No pix</span>
        </h3>
        <Button title={buttonTitle} to="/ShowProduct">
        <a href="#"></a></Button>
      </div>
    </Container>
  );
}
