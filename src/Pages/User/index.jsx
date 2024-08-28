import { Container, LinksInfo, UserInfo, ListItem } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { BsInfoSquare, BsClockHistory } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";




export function User() {
  const links = [
    {
      id: "link1",
      icon1: <BsInfoSquare />,
      text: "Suas informações",
      href: "https://www.google.com.br/?hl=pt-BR",
      icon2: <IoIosArrowForward />,
    },
    {
      id: "link2",
      icon1: <GrShieldSecurity />,
      text: "Segurança",
      href: "https://www.google.com.br/?hl=pt-BR",
      icon2: <IoIosArrowForward />,
    },
    {
      id: "link3",
      icon1: <BsClockHistory />,
      text: "Histórico",
      href: "https://www.google.com.br/?hl=pt-BR",
      icon2: <IoIosArrowForward />,
    },
    {
      id: "link4",
      icon1: <MdOutlinePrivacyTip />,
      text: "Privacidade",
      href: "https://www.google.com.br/?hl=pt-BR",
      icon2: <IoIosArrowForward />,
    },
  ];

  return (
    <Container>
      <Header />
      <main>
    
        <UserInfo>
          <img src="../../../imagens/Foto user.png" alt="" />
          <div className="info">
              <p>Rodrigo Arebbiett</p>
              <p>RodrigoAre@gmail.com</p>
           
             
          </div>
        </UserInfo>
        <LinksInfo>
          <ul>
            {links.map((link) => (
              <ListItem key={link.id}>
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
              </ListItem>
            ))}
          </ul>
        </LinksInfo>
      </main>
      <Footer />
    </Container>
  );
}
