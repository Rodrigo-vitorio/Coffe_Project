import { Container, Logo } from "./style";
import {
  FaFacebookSquare,
  FaWhatsapp,
  FaInstagram ,
  FaRegCreditCard,
  FaCcMastercard ,
  FaCcVisa 
} from "react-icons/fa";
import LogoImg from "../../Img/logo (1).png";

export function Footer() {
  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="Logo da empresa" />
      </Logo>

      <ul className="links">
        <li>
          <h3>Institucional</h3>
        </li>
        <li>
          <a href="#">Como comprar</a>
        </li>
        <li>
          <a href="#">Segurança</a>
        </li>
        <li>
          <a href="#">Envio</a>
        </li>
        <li>
          <a href="#">Pagamento</a>
        </li>
        <li>
          <a href="#">Política de privacidade </a>
        </li>
        <li>
          <a href="#">Termo de uso </a>
        </li>
      </ul>
      <ul className="links">
        <li>
        <h3>Fale conosco</h3>
        </li>
        <li>
          <a href="#">(**)****-****</a>
        </li>
        <li>
          <a href="#">administrativoCafenia@gmail.com</a>
        </li>
        <li>
          <a href="#">Segunda a Sexta-feira das 08h às 18h</a>
        </li>
        <div className="icons">
          <FaFacebookSquare />
          <FaWhatsapp />
          <FaInstagram  />
        </div>
      </ul>
      <ul className="links">
        <li>
            <h3>Pagamentos</h3>
        </li>
        <div className="pagamentos">
          <FaRegCreditCard/>
          <FaCcMastercard/>
          <FaCcVisa/>
        </div>
      </ul>
    </Container>
  );
}
