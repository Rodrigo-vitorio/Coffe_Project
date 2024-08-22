import { useEffect, useRef, useState } from "react";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Container, Content, Preparation } from "./style";
import { Caracteristicas } from "../../Components/Caracteristicas";
import { CoffePass } from "../../Components/CoffePass";
// icones usados
import { PiShareNetworkDuotone } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { CiMoneyBill, CiCreditCard1, CiCoffeeCup } from "react-icons/ci";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { FiCoffee } from "react-icons/fi";
import { FaWind, FaCoffee } from "react-icons/fa";
import {
  GiCoffeeBeans,
  GiManualMeatGrinder,
  GiFireplace,
} from "react-icons/gi";

// Definindo os dados dos produtos
const produtos = [
  {
    id: 1,
    nome: "Café Torrado e Moído Dark Roast Gourmet 3 Corações Pacote 250g",
    preco: "R$19,99",
    imagem: "../../../imagens/3corDarkRoast.png",
    descricao:
      "O café Dark Roast, ou torra escura, é conhecido por seu sabor robusto e intenso. Durante o processo de torrefação, os grãos de café são aquecidos a altas temperaturas por um período mais longo, resultando em um grão mais escuro e oleoso.",
    caracteristicas: [
      { title: "Tipo", icon: <FiCoffee />, info2: "Arábica" },
      { title: "Aroma", icon: <FaWind />, info2: "Adocicado" },
      { title: "Bebida", icon: <CiCoffeeCup />, info2: "Mole" },
      { title: "Sabor", icon: <GiCoffeeBeans />, info2: "Chocolate amargo" },
      { title: "Corpo", icon: <FaCoffee />, info2: "Encorpado" },
      { title: "Moagem", icon: <GiManualMeatGrinder />, info2: "Fina" },
      { info2: "Dark Roast" },
      { title: "Torra", icon: <GiFireplace />, info2: "Escura" },
    ],
  },
];

export function ShowProduct() {
  
  const [produtoSelecionado, setProdutoSelecionado] = useState(produtos[0]); // Produto padrão selecionado
  const plusButtonRef = useRef(null);
  const minusButtonRef = useRef(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handlePlusClick = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleMinusClick = () => {
      setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const plusButton = plusButtonRef.current;
    const minusButton = minusButtonRef.current;

    plusButton.addEventListener("click", handlePlusClick);
    minusButton.addEventListener("click", handleMinusClick);

    return () => {
      plusButton.removeEventListener("click", handlePlusClick);
      minusButton.removeEventListener("click", handleMinusClick);
    };
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div className="image">
            <img src={produtoSelecionado.imagem} alt="Imagem do produto" />
          </div>
          <div className="info">
            <div className="infoName">
              <h3>{produtoSelecionado.nome}</h3>
              <a href="">
                <PiShareNetworkDuotone />
              </a>
              <a href="">
                <MdFavoriteBorder />
              </a>
            </div>
            <div className="price">
              <h1>{produtoSelecionado.preco}</h1>
              <div className="desconto">
                <CiMoneyBill />
                <p>2x de 10,00 sem juros</p>
                <CiCreditCard1 />
                <p>5% de desconto no pix</p>
              </div>
            </div>
            <a href="">Ver formas de pagamento</a>
            <div className="stars">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarHalf />
              <p>(92)</p>
            </div>
            <div className="quant">
              <div className="quantity">
                <button ref={minusButtonRef}>-</button>
                <span>{quantity}</span>
                <button ref={plusButtonRef}>+</button>
              </div>
              <button className="add-to-cart">Adicionar ao carrinho</button>
            </div>
            <p>{produtoSelecionado.descricao}</p>
          </div>
          <div className="frete">
            <h1>Meios de envio</h1>
            <div className="calcular">
              <input placeholder="Seu CEP" type="text" />
              <button>Calcular</button>
            </div>
            <a
              href="https://www2.correios.com.br/sistemas/buscacep/buscacep.cfm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Não sei meu CEP
            </a>
          </div>
          <div className="infoCaract">
            <div className="caract">
              {produtoSelecionado.caracteristicas.map(
                (caracteristica, index) => (
                  <Caracteristicas
                    key={index}
                    title={caracteristica.title}
                    icon={caracteristica.icon}
                    info2={caracteristica.info2}
                    className={`div${index + 1}`}
                  />
                )
              )}
            </div>
            <Preparation>
              <h2>Modo de preparo</h2>
              <ul>
                <li>
                  Para cada 180 ml de água, use aproximadamente 2 colheres de
                  sopa de café arábica moído.
                </li>
                <li>
                  Aqueça a água até cerca de 92-96°C. Se estiver usando uma
                  chaleira, desligue-a um pouco antes de ferver completamente.
                </li>
                <li>Coloque o filtro de papel na cesta da cafeteira.</li>
                <li>
                  Coloque o café moído no filtro, despeje a água quente no
                  reservatório da cafeteira,
                </li>
                <li>
                  Ligue a cafeteira e deixe o processo de filtragem ocorrer. A
                  água quente passará pelo café moído, extraindo o sabor e
                  gotejando para a jarra abaixo.
                </li>
              </ul>
            </Preparation>
            <CoffePass />
          </div>
        </Content>
        <Footer />
      </main>
    </Container>
  );
}
