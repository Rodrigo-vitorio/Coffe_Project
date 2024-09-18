import React, { useState } from "react";
import { Container, Logo, Search, Bar, Login, Icone } from "./style";
import LogoImg from "../../Img/logo (1).png";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { DropDown } from "../DropDown";
import { Link } from "react-router-dom";

export function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchClick = () => {
    setIsExpanded(!isExpanded); // Inverte o estado atual
  };

  return (
    <Container>
      <div className="top">
        <Logo>
          <img src={LogoImg} alt="Logo da empresa" />
        </Logo>
        <Bar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </Bar>
        <Search
          className={`search-container ${isExpanded ? "active" : ""}`}
          onClick={handleSearchClick}
        >
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais...."
          />
          <CiSearch />
        </Search>
        <Login>
          <Link to="/User">
            <FaUserCircle />
          </Link>
          <div className="user">
            <h1>Minha conta</h1>
            <div className="links">
              <h3>
                <Link to="/SignIn">Entrar/</Link>
              </h3>
              <h3>
                <Link to="/Dashboard">Cadastrar</Link>
              </h3>
            </div>
          </div>
        </Login>
        <Icone>
          <Link to="/Carrinho">
            <TiShoppingCart />
          </Link>
        </Icone>
      </div>
      <DropDown />
    </Container>
  );
}
