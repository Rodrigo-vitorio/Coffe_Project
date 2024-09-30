import { Container, Sidebar, Info, Users, Orders } from "./style";
import { Header } from "../../../Components/Header";
import { Footer } from "../../../Components/Footer";
import { GraphicTotal } from "../../../Components/GraphicTotal";
import { GraphicUsers } from "../../../Components/GraphicUsers";
import { GraphicVisit } from "../../../Components/GraphicVisit";
import React, { useState } from "react";
import { FaStop } from "react-icons/fa";

import { ImgUp } from "../../../Components/ImgUp";

export function Vendas() {
  const [selected, setSelected] = useState(null);
  const menuItems = [
    "Vendas e faturamentos",
    "Pedidos",
    "Estoque",
    "Análise de produtos",
  ];
  const orders = [
    {
      name: "Rodrigo V",
      id: "123",
      progress: "Concluido",
      status: "Entregue",
      tracking: "#",
    },
    {
      name: "Rodrigo V ",
      id: "124",
      progress: "Cancelado",
      status: "Em andamento",
      tracking: "#",
    },
    {
      name: "Rodrigo V",
      id: "125",
      progress: "Processando",
      status: "Entregue",
      tracking: "#",
    },
    {
      name: "Rafael V",
      id: "126",
      progress: "Processando",
      status: "Entregue",
      tracking: "#",
    },
    {
      name: "Rodrigo V",
      id: "127",
      progress: "Cancelado",
      status: "Pendente",
      tracking: "#",
    },
    {
      name: "Erenilda V",
      id: "128",
      progress: "Processando",
      status: "Em andamento",
      tracking: "#",
    },
    {
      name: "Gislaine V",
      id: "129",
      progress: "Cancelado",
      status: "Concluído",
      tracking: "#",
    },
  ];
  return (
    <Container>
      <Header />
      <main>
        <Sidebar>
          <h2>Coffe Gentleman</h2>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={selected === index ? "selected" : ""}
                onClick={() => setSelected(index)}
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </Sidebar>

        <Info>
          <div className="square">
            <p>
              Vendas totais no mês de : <span>Julho</span>
            </p>
            <GraphicTotal />
          </div>
          <div className="square">
            <p>
              {" "}
              Carrinhos abandonados no mês de : <span>Julho</span>
            </p>
            <GraphicUsers />
          </div>

          <div className="square">
            <p>
              Visitas no site no mês de : <span>Julho</span>
            </p>
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

        <Orders>
          <h1>Ordens recentes</h1>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Identificador</th>
                <th>Progresso</th>
                <th>Status</th>
                <th>Rastreamento</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td data-label="Nome">{order.name}</td>
                  <td data-label="Identificador">{order.id}</td>
                  <td data-label="Progresso">{order.progress} {order.cor}</td>
                  <td data-label="Status">{order.status}</td>
                  <td data-label="Rastreamento"> <a href={order.tracking}>Rastreamento</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Orders>
      </main>
      <Footer />
    </Container>
  );
}
