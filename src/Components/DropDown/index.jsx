import React from "react";
import { Container } from "./style.js";

export function DropDown() {
  return (
    <Container>
      <nav>
        <ul>
          <li className="dropdown">
            <a href="#">Acessórios</a>
            <div className="dropdown-content">
              <div className="teste">
                <ul>
                  <li>
                    <h1> Moedores</h1>
                  </li>
                  <li>
                    <a href="#">Manuais</a>
                  </li>
                  <li>
                    <a href="#">Elétricos</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h1>Filtros</h1>
                  </li>
                  <li>
                    <a href="#">Filtros de Papel</a>
                  </li>
                  <li>
                    <a href="#">Filtros Metálicos</a>
                  </li>
                  <li>
                    <a href="#">Filtros de Tecido</a>
                  </li>
                  <li>
                    <a href="#">Filtros Específicos para Métodos</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h1>Para o preparo</h1>
                  </li>
                  <li>
                    <a href="#">Balança Digital</a>
                  </li>
                  <li>
                    <a href="#">Termômetro</a>
                  </li>
                  <li>
                    <a href="#">Chaleira Pescoço de Ganso</a>
                  </li>
                  <li>
                    <a href="#">Colher de Medição</a>
                  </li>
                  <li>
                    <a href="#">Potes Herméticos</a>
                  </li>
                  <li>
                    <a href="#">Escovas de Limpeza</a>
                  </li>
                  <li>
                    <a href="#">Cremeiras</a>
                  </li>
                  <li>
                    <a href="#">Bules e Jarras</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Kits cafés</a>
            <div className="dropdown-content">
              <div className="teste">
                <ul>
                  <li>
                    <a href="#">Kit café fazenda floresta</a>
                  </li>
                  <li>
                    <a href="#">Monte seu kit</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Cafés especiais</a>
            <div className="dropdown-content">
              <div className="teste">
                <ul>
                  <li>
                    <a href="#">3 corações</a>
                  </li>
                  <li>
                    <a href="#">Fazenda floresta</a>
                  </li>
                  <li>
                    <a href="#">LOR</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Maquinário</a>
            <div className="dropdown-content">
              <div className="teste">
                <ul>
                  <li>
                    <h1>Cafeteiras</h1>
                  </li>
                  <li>
                    <a href="#">Método de Gotejamento</a>
                  </li>
                  <li>
                    <a href="#">Método de Pressão</a>
                  </li>
                  <li>
                    <a href="#">Método de Infusão</a>
                  </li>
                  <li>
                    <a href="#">Método a Vácuo</a>
                  </li>
                  <li>
                    <a href="#">Método de Percolação</a>
                  </li>
                  <li>
                    <a href="#">Método de Cápsulas</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
