import { Container, Content, Filters, Itens } from "./style";
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import {Produtos} from '../../Components/Produtos'

export function Search() {
  // Estrutura de dados contendo os filtros e suas opções
  const filtros = [
    {
      titulo: "Tipo",
      opcoes: ["Moedor elétrico(01)", "Moedor manual(05)"],
      host :["#"],

    },
    {
      titulo: "Marca",
      opcoes: ["TimeMore Chestnut C2", "Hamilton Beach Ajustável", "Baratza Encore", "KitchenAid", "Cadence Di Grano"],
      host :["#"],

    },
    {
      titulo: "Mecanismo",
      opcoes: ["Disco", "Lamina"],
      host :["#"],
    }
  ];

  return (
    <Container>
      <Header />
      <Content>
        <main>
          <Filters>
            {filtros.map((filtro, index) => (
              <ul key={index}>
                <h3>{filtro.titulo}</h3>
                {filtro.opcoes.map((opcao, opcaoIndex) => (
                  <li key={opcaoIndex}><a href={filtro.host}>{opcao}</a></li>
                ))}
              </ul>
            ))}
          </Filters>
          <Itens>
          <Produtos
              imagemUrl="../../../imagens/41sKDyFP3lL._AC_SX569_.jpg"
              description="Moedor de Café Grãos Manual Inox Portátil Cerâmica"
              price1="R$ 19,00"
              discount="R$ 20,00"
              buttonTitle="Compre Agora"
            ></Produtos>
            <Produtos
              imagemUrl="../../../imagens/510SMbF900L.__AC_SX300_SY300_QL70_ML2_.jpg"
              description="Moedor De Grãos e Café Manual - Clink"
              price1="R$ 17,00"
              discount="R$ 20,00"
              buttonTitle="Compre Agora"
            ></Produtos>
            <Produtos
              imagemUrl="../../../imagens/51BKGzILKkL._AC_UL320_.jpg"
              description=" Moedor de Café di Grano, Marrom, 110v, Cadence"
              price1="R$ 20,00"
              discount="R$ 21,00"
              buttonTitle="Compre Agora"
            ></Produtos>
            <Produtos
              imagemUrl="../../../imagens/51j9lAfC4pL._SX425_.jpg"
              description=" Moedor de Bermar, 110v"
              price1="R$ 100,00"
              discount="R$ 20,00"
              buttonTitle="Compre Agora"
            ></Produtos>
            <Produtos
              imagemUrl="../../../imagens/51rrDN4Za0L._AC_UL320_.jpg"
              description="Moedor de Café, Inox, 220v, Oster"
              price1="R$ 100,00"
              discount="R$ 20,00"
              buttonTitle="Compre Agora"
            ></Produtos>
            <Produtos
              imagemUrl="../../../imagens/618fTR1dATL.__AC_SX300_SY300_QL70_ML2_.jpg"
              description="Moedor de café elétrico portátil, Iruihoo"
              price1="R$ 19,99"
              discount="R$ 23,00"
              buttonTitle="Compre Agora"
            ></Produtos>
            <Produtos
              imagemUrl="../../../imagens/61BTGC3ClYL.__AC_SX300_SY300_QL70_ML2_.jpg"
              description="Moedor de Café Grãos Manual Inox Portátil Cerâmica"
              price1="R$ 18,99"
              discount="R$ 22,00"
              buttonTitle="Compre Agora"
            ></Produtos>
            <Produtos
              imagemUrl="../../../imagens/61kXQJ-hjLL.__AC_SX300_SY300_QL70_ML2_.jpg"
              description="Moedor de café elétrico, 14.500pm"
              price1="R$ 17,00"
              discount="R$ 20,00"
              buttonTitle="Compre Agora"
            ></Produtos>
            
          </Itens>
        </main>
      </Content>
      <Footer />
    </Container>
  );
}
