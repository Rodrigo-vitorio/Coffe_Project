import { useEffect, useRef, useState } from "react";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Container, Content, DescricaoProd } from "./style";

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
    nome: "Moedor 110V, Bermar",
    preco: "R$59,99",
    imagem: "../../../imagens/51j9lAfC4pL._SX425_.jpg",
    descricao:
      "O moedor Bermar 110V de lâmina é um equipamento eficiente e robusto, ideal para moer grãos com precisão. Ele conta com uma lâmina de aço de alta durabilidade que garante uma moagem uniforme e rápida. Com voltagem de 110V. Ideal para quem busca praticidade e performance na preparação de grãos para café.",
  },
];

export function ShowMachine() {
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
          <DescricaoProd>
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
          </DescricaoProd>
        </Content>
        <Footer />
      </main>
    </Container>
  );
}
