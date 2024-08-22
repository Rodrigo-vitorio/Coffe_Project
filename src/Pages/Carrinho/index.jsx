import { Container, Content, CarrinhoProd, Subtotal, Total } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { CoffePass } from "../../Components/CoffePass";
import { Button } from "../../Components/Button";
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

export function Carrinho() {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Café arabica Dark Roast 3 corações 250g', preco: 19.99, quantidade: 1 },
    { id: 2, nome: 'Café arabica Dark Roast 3 corações 250g', preco: 19.99, quantidade: 1 },
    // Adicione mais produtos aqui
  ]);

  const incrementarQuantidade = (id) => {
    setProdutos(produtos.map((produto) =>
      produto.id === id ? { ...produto, quantidade: produto.quantidade + 1 } : produto
    ));
  };

  const decrementarQuantidade = (id) => {
    setProdutos(produtos.map((produto) =>
      produto.id === id ? { ...produto, quantidade: Math.max(produto.quantidade - 1, 1) } : produto
    ));
  };

  const calcularTotal = () => {
    return produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
  };

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <CarrinhoProd>
            {produtos.map((produto) => (
              <Subtotal key={produto.id}>
                <img
                  src="../../../imagens/3corDarkRoast.png"
                  alt={produto.nome}
                />
                <div className="info">
                  <h3>{produto.nome}</h3>
                  <h2>R${produto.preco.toFixed(2)}</h2>
                  <div className="info2">
                    <p>Quantidade</p>
                    <div className="quantity">
                      <button onClick={() => decrementarQuantidade(produto.id)}>-</button>
                      <span>{produto.quantidade}</span>
                      <button onClick={() => incrementarQuantidade(produto.id)}>+</button>
                    </div>
                    <a href="#">Excluir</a>
                    <a href="#">Compartilhar</a>
                  </div>
                </div>
              </Subtotal>
            ))}
            <Total>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <IoInformationCircleOutline />
                <p>Para obter frete grátis adquira já o nosso Coffee Pass</p>
              </a>
              <p>Subtotal({produtos.length} produto(s)): R${calcularTotal().toFixed(2)}</p>
              <p>+</p>
              <p>Frete: R$12,00</p>
              <p>Total: R${(calcularTotal() + 12).toFixed(2)}</p>
              <Button title="Fechar pedido" />
            </Total>
          </CarrinhoProd>
          <CoffePass />
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
