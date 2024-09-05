import React from 'react';
import { Container, Content, LinksAlt, Hiddem } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";

const useToggle = (initialState = false) => {
  const [isVisible, setIsVisible] = React.useState(initialState);
  const toggle = () => setIsVisible(!isVisible);
  return [isVisible, toggle];
};

export function Privacy() {
  const [isNotificationVisible, toggleNotification] = useToggle();
  const [isCookiesVisible, toggleCookies] = useToggle();

  const renderCheckItem = (label) => (
    <div className="check">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <p>{label}</p>
    </div>
  );

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
            <LinksAlt onClick={toggleNotification}>
              <li><p>Notificação</p></li>
              <IoIosArrowForward />
            </LinksAlt>
            {isNotificationVisible && (
              <Hiddem>
                {renderCheckItem("Receber notificação por email")}
                {renderCheckItem("Receber notificação whatsapp")}
                {renderCheckItem("Receber notificação por mensagem")}
              </Hiddem>
            )}

            <LinksAlt onClick={toggleCookies}>
              <li><p>Cookies</p></li>
              <IoIosArrowForward />
            </LinksAlt>
            {isCookiesVisible && (
              <Hiddem>
                {renderCheckItem("Cookies Essenciais/Necessários")}
                {renderCheckItem("Cookies de Desempenho")}
                {renderCheckItem("Cookies de Funcionalidade")}
              </Hiddem>
            )}
          </ul>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
