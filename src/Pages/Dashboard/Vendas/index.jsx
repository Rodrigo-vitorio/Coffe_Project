import { Container, Sidebar, Info, Users, Orders } from "./style";
import { Header } from "../../../Components/Header";
import { Footer } from "../../../Components/Footer";
import { GraphicTotal } from "../../../Components/GraphicTotal";
import { GraphicUsers } from "../../../Components/GraphicUsers";
import { GraphicVisit } from "../../../Components/GraphicVisit";


import { ImgUp } from "../../../Components/ImgUp";

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
            <p>Vendas totais</p>
            <GraphicTotal />
          </div>
          <div className="square">
            <p> Carrinhos abandonados</p>
            <GraphicUsers />
          </div>

          <div className="square">
            <p>Visitas no site</p>
            <GraphicVisit />
          </div>
        </Info>
        <Users>
          <h1>Usuários</h1>
          <ul>
            <li>
              <img
                src="../../../../imagens/admin_person_user_man_2839.png"
                alt=""
              />
              <p>Administrador</p>
              <p>Nivel 1 </p>
            </li>
            <li>
              <img src="../../../../imagens/userImage.png" alt="" />
              <p>Rodrigo abberriet</p>
              <p>Nivel 2 </p>
            </li>
            <li>
              <img src="../../../../imagens/userImage.png" alt="" />
              <p>Rodrigo abberriet</p>
              <p>Nivel 3 </p>
            </li>
            <li>
              <img src="../../../../imagens/userImage.png" alt="" />
              <p>Gislaine Vitorio</p>
              <p>Nivel 2 </p>
            </li>

            <li>
              <ImgUp />
              <p>New User</p>
            </li>
          </ul>
        </Users>

        <Orders></Orders>
      </main>
      <Footer />
    </Container>
  );
}
