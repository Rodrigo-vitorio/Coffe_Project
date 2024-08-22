import { Container, Menu } from "./style";
import { IoIosMenu } from "react-icons/io";
import { useState, useRef } from "react";

export function DropNav() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);

  return (
    <Container>
      <Menu>
        <button onClick={handleClick} className="menu-button">
          <IoIosMenu />
        </button>
        <nav
          ref={dropDownRef}
          className={`menu ${isActive ? "active" : ""}`}
        >
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Loja</a></li>
          </ul>
        </nav>
      </Menu>
    </Container>
  );
}
