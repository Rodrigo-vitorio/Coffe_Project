import React, { useState } from "react";
import { Container } from "./style";

export const Burguer = () => {
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(true);

    // toggle burger menu change
    const updateMenu = () => {
        console.log('Menu clicked'); // Adiciona um log para depuração

        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    };

    return (
        <Container>
            <div style={{ width: '100%', height: '100vh' }}>
                <nav className="navbar">
                    <div className="logo">
                        {/* Adicione o logo aqui */}
                        <img src="logo.png" alt="Logo" />
                    </div>

                    <div className="burger-menu" onClick={updateMenu} aria-label="Menu">
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>

                    <div className={menu_class}>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </Container>
    );
}
