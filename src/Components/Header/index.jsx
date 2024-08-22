import React, { useState } from "react";
import { Container, Logo, Search, Bar, Login, Icone } from "./style";
import LogoImg from "../../Img/logo (1).png";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import {DropDown} from "../DropDown"




export function Header() {
  const [menuActive, setMenuActive] = useState(true);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <Container>
      <div className="top">
        <Logo>
          <img src={LogoImg} alt="Logo da empresa" />
        </Logo>
        <Bar>
        
        </Bar>
        <Search>
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais...."
          />
          <CiSearch />
        </Search>
        <Login>
          <FaUserCircle />
          <div className="user">
            <h1>Minha conta</h1>
            <div className="links">
              <h3>
                <a href="#">Entrar</a>/
              </h3>
              <h3>
                <a href="#">Cadastrar</a>
              </h3>
            </div>
          </div>
        </Login>
        <Icone>
          <TiShoppingCart />
        </Icone>
      </div>
      <DropDown />
    </Container>
  );
}
