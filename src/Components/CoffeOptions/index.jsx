import { Button } from "../Button";
import { Container, Analisar } from "./style";

export function CoffeeOptions() {
  const options = [
    { id: "grao", label: "Café em grão" },
    { id: "especial", label: "Café especial" },
    { id: "moido", label: "Café em pó" },
  ];

  return (
    <Container>
      <div className="link1">
        {options.map((option) => (
          <div key={option.id} className={`${option.id} square`}>
            <p>{option.label}</p>
            <Analisar>
              <Button title="Ver produtos" />
            </Analisar>
          </div>
        ))}
      </div>
    </Container>
  );
}
