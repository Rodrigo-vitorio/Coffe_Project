import { Container, Content, LinksAlt } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { FaLock } from "react-icons/fa";

export function Security() {
  const links = [
    {
      id: "link1",

      text: "Alterar Senha",
      href: "https://www.google.com.br/?hl=pt-BR",
      icon2: <IoIosArrowForward />,
    },
    {
      id: "link2",

      text: "Recuperação de Conta",
      href: "https://www.google.com.br/?hl=pt-BR",
      icon2: <IoIosArrowForward />,
    },
    
    {
      id: "link3",

      text: "Dispositivos vinculados",
      href: "https://www.google.com.br/?hl=pt-BR",
      icon2: <IoIosArrowForward />,
    },
    {
        id: "link4",
  
        text: "Verificação de identidade",
        href: "https://www.google.com.br/?hl=pt-BR",
        icon2: <IoIosArrowForward />,
      },
    {
      id: "link5",

      text: "Deletar Conta",
      href: "https://www.google.com.br/?hl=pt-BR",
      icon2: <IoMdClose />,
    },
  ];
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <h1>
            {" "}
            Segurança{" "}
            <span>
              <FaLock />
            </span>{" "}
          </h1>
          <ul>
            {links.map((link) => (
              <LinksAlt key={link.id}>
                <a
                  id={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon1}
                  {link.text}
                </a>
                {link.icon2}
              </LinksAlt>
            ))}
          </ul>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
