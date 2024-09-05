import { Container, Content, CarrinhoProd,CarrinhoG, Subtotal, Total } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";

import { Button } from "../../Components/Button";
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

export function Carrinho() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "Café arabica Cerrado Mineiro 3 corações 250g",
      url: "../../../imagens/3corCerrado.png",
      preco: 19.99,
      quantidade: 1,
    },
    {
      id: 2,
      nome: "Café arabica Dark Roast 2 corações 250g",
      url: "../../../imagens/3corDarkRoast.png",
      preco: 21.99,
      quantidade: 1,
    },
    {
      id: 3,
      nome: "Café arabica Dark Roast 3 corações 250g",
      url: "../../../imagens/3corPortinari.png",
      preco: 18.99,
      quantidade: 1,
    },
    {
      id: 4,
      nome: "Café arabica Dark Roast 3 corações 250g",
      url: "../../../imagens/3corMogiana.png",
      preco: 18.99,
      quantidade: 1,
    },

   
  ]);

  const incrementarQuantidade = (id) => {
    setProdutos(
      produtos.map((produto) =>
        produto.id === id
          ? { ...produto, quantidade: produto.quantidade + 1 }
          : produto
      )
    );
  };

  const decrementarQuantidade = (id) => {
    setProdutos(
      produtos
        .map((produto) =>
          produto.id === id
            ? { ...produto, quantidade: Math.max(produto.quantidade - 1, 0) }
            : produto
        )
        .filter((produto) => produto.quantidade > 0)
    );
  };

  const removerProduto = (id) => {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };

  const calcularTotal = () => {
    return produtos.reduce(
      (total, produto) => total + produto.preco * produto.quantidade,0
    );
  };

  const calcularFrete = () => {
    const subtotal = calcularTotal();
    return subtotal >= 100 ? 0 : 12; 
  };

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <CarrinhoG>
            <CarrinhoProd>
              {produtos.map((produto) => (
                <Subtotal key={produto.id}>
                  <img
                    src={produto.url} 
                    alt={produto.nome}
                  />
                  <div className="info">
                    <h3>{produto.nome}</h3>
                    <h2>R${produto.preco.toFixed(2)}</h2>
                    <div className="info2">
                      <p>Quantidade</p>
                      <div className="quantity">
                        <button onClick={() => decrementarQuantidade(produto.id)} className="bttn sub">
                          -
                        </button>
                        <span>{produto.quantidade}</span>
                        <button onClick={() => incrementarQuantidade(produto.id)} className="bttn add"> 
                          +
                        </button>
                      </div>
                      <button onClick={() => removerProduto(produto.id)} className="excluir">
                        Excluir
                      </button>
                      <button className="compartilhar"
                        onClick={() =>
                          alert(
                            "Compartilhar funcionalidade ainda não implementada"
                          )
                        }
                      >
                        Compartilhar
                      </button>
                    </div>
                  </div>
                </Subtotal>
              ))}
            </CarrinhoProd>
            <Total>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <IoInformationCircleOutline />
                <p>Para obter frete grátis adquira já o nosso Coffee Pass</p>
              </a>
              <p>
                Subtotal({produtos.length} produto(s)): R$
                {calcularTotal().toFixed(2)}
              </p>
              <p>+</p>
              <p>Frete: R${calcularFrete().toFixed(2)}</p>
              <p>Total: R${(calcularTotal() + calcularFrete()).toFixed(2)}</p>
              <Button title="Fechar pedido" />
            </Total>
          </CarrinhoG>  
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
