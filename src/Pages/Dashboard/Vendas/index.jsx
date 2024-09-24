import { Container, Sidebar, Info, Users, Orders } from "./style";
import { Header } from "../../../Components/Header";
import { Footer } from "../../../Components/Footer";
import { GraphicTotal } from "../../../Components/GraphicTotal";
import { GraphicUsers } from "../../../Components/GraphicUsers";
import { GraphicVisit } from "../../../Components/GraphicVisit";

export function Vendas() {
  return (
    <Container>
      <Header />
      <main>
        <Sidebar>
          <h2>Coffe Gentleman</h2>
          <ul>
            <li>
              <a href="">Vendas e faturamentos</a>
            </li>
            <li>
              <a href="">Pedidos</a>
            </li>
            <li>
              <a href="">Estoque</a>
            </li>
            <li>
              <a href="">Análise de produtos</a>
            </li>
          </ul>
        </Sidebar>

        <Info>
          <div className="square">
            <GraphicTotal />
          </div>
          <div className="square">
            <GraphicUsers />
          </div>

          <div className="square">
            <GraphicVisit />
          </div>
        </Info>
        <Users></Users>

        <Orders></Orders>
      </main>
      <Footer />
    </Container>
  );
}
