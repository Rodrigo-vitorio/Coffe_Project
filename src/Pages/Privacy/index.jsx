import { Container, Content, LinksAlt, Fade } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";
import React, { useState } from 'react';

export function Privacy() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isCookiesVisible, setIsCookiesVisible] = useState(false);

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <h1>
            Privacidade
            <span>
              <MdOutlinePrivacyTip />
            </span>
          </h1>

          <ul>
            <LinksAlt onClick={() => setIsNotificationVisible(!isNotificationVisible)}>
              <li>
                <p>Notificação</p>
              </li>
              <IoIosArrowForward />
            </LinksAlt>
            {isNotificationVisible && (
              <Fade>
                <div className="check">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <p>Receber notificação por email</p>
                </div>
                <div className="check">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <p>Receber notificação whatsapp</p>
                </div>
                <div className="check">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <p>Receber notificação por mensagem</p>
                </div>
              </Fade>
            )}

            <LinksAlt onClick={() => setIsCookiesVisible(!isCookiesVisible)}>
              <li>
                <p>Cookies</p>
              </li>
              <IoIosArrowForward />
            </LinksAlt>
            {isCookiesVisible && (
              <Fade>
                <div className="check">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <p>Cookies Essenciais/Necessários</p>
                </div>
                <div className="check">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <p>Cookies de Desempenho</p>
                </div>
                <div className="check">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <p>Cookies de Funcionalidade</p>
                </div>
              </Fade>
            )}
          </ul>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
