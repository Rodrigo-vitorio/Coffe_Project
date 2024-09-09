import { Container, Content } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { StarRating } from "../../Components/StarRating";
import {Button} from "../../Components/Button"

export function History() {
    const products = [
        {
          id: 1,
          name: 'Café 3 corações Cerrado Mineiro',
          image: '../../../imagens/3corCerrado.png',
          date: '05/09/2024',
          price: 'R$19,99',
          sku: '83612096914',
        },
        {
          id: 2,
          name: "Café 3 corações Dark Roast ",
          image: '../../../imagens/3corDarkRoast.png',
          date: '10/09/2024',
          price: 'R$15,99',
          sku: '72983472938',
        }, {
            id: 3,
            name: "Café 3 corações Dark Roast ",
            image: '../../../imagens/3corDarkRoast.png',
            date: '10/09/2024',
            price: 'R$15,99',
            sku: '72983472938',
          },
        
      ];
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ul>
            {products.map((product) => (
              <li className="info" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="desc">
                  <p>{product.name}</p>
                  <p>{product.date}</p>
                  <p>{product.price}</p>
                  <p>Avaliação do produto: <StarRating /></p>
                </div>
                <div className="infoID">
                  <p>Status: Em andamento</p>
                  <p>ID SKU: {product.sku}</p>
                  <Button title="Comprar novamente"/>
                </div>
              </li>
            ))}
          </ul>
        </Content>
      </main>
      <Footer></Footer>
    </Container>
  );
}