import React from "react";
import { Container } from "./style.js";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const menuItems = [
  {
    title: "Acessórios",
    subItems: [
      {
        title: "Moedores",
        links: ["Manuais", "Elétricos"],
      },
      {
        title: "Filtros",
        links: ["Filtros de Papel", "Filtros Metálicos", "Filtros de Tecido", "Filtros Específicos para Métodos"],
      },
      {
        title: "Para o preparo",
        links: [
          "Balança Digital", 
          "Termômetro", 
          "Chaleira Pescoço de Ganso", 
          "Colher de Medição", 
          "Potes Herméticos", 
          "Escovas de Limpeza", 
          "Cremeiras", 
          "Bules e Jarras"
        ],
      },
    ],
  },
  {
    title: "Kits cafés",
    subItems: [
      {
        title: null,
        links: ["Kit café fazenda floresta", "Monte seu kit"],
      },
    ],
  },
  {
    title: "Cafés especiais",
    subItems: [
      {
        title: null,
        links: ["3 corações", "Fazenda floresta", "LOR"],
      },
    ],
  },
  {
    title: "Maquinário",
    subItems: [
      {
        title: "Cafeteiras",
        links: ["Método de Gotejamento", "Método de Pressão", "Método de Infusão", "Método a Vácuo", "Método de Percolação", "Método de Cápsulas"],
      },
    ],
  },
];

export function DropDown() {
  return (
    <Container>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="dropdown">
              <a href="#">{item.title}</a>
              <div className="dropdown-content">
                <div className="teste">
                  {item.subItems.map((subItem, subIndex) => (
                    <ul key={subIndex}>
                      {subItem.title && (
                        <li>
                          <h1>
                            {subItem.title} <MdOutlineKeyboardDoubleArrowDown />
                          </h1>
                        </li>
                      )}
                      {subItem.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
