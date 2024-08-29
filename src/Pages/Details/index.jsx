import { Container, Content } from "./Style";
import { Header } from "../../Components/Header";
import { Slide } from "../../Components/Slide";
import { Button_links } from "../../Components/Button_links";
import { LinksProduto } from "../../Components/LinkProduto";
import { CoffeeOptions } from "../../Components/CoffeOptions";
import { Produtos } from "../../Components/Produtos";
import { Carousel } from "../../Components/Carousel";
import { Footer } from "../../Components/Footer";
import { CoffePass } from "../../Components/CoffePass";



export function Details() {
  return (
    <Container>
      <Header />

      <main>
      
        <Content>
          <Slide>
            <h1>SEU AMANHECER MAIS GOSTOSO</h1>
            <h3>
              O café é a prova de que pequenos momentos podem ser grandes fontes
              de prazer.
            </h3>
          </Slide>
        
            <Button_links>
              <CoffeeOptions />
              <div className="link2">
                <LinksProduto imagemUrl="../../../imagens/maquinas.png">
                  <h1>Máquinas</h1>
                </LinksProduto>
                <LinksProduto imagemUrl="../../../imagens/kit.png">
                  <h1>Kits café</h1>
                </LinksProduto>
                <LinksProduto imagemUrl="../../../imagens/filter.png">
                  <h1>Filtros</h1>
                </LinksProduto>
                <LinksProduto imagemUrl="../../../imagens/utensilio.png">
                  <h1>Utensílios bartender</h1>
                </LinksProduto>
                <LinksProduto imagemUrl="../../../imagens/descontos.png">
                  <h1>Descontos</h1>
                </LinksProduto>
              </div>
            </Button_links>
            <div className="showProdutos">
              <img src="../../../imagens/logoFazenda.png" alt="logo fazenda" />
              <Produtos
                imagemUrl="../../../imagens/cafefazendaReserva.png"
                description="Café Fazenda Floresta Especial Reserva 250g Torrado em grãos"
                price1="R$ 19,00"
                discount="R$ 20,00"
                buttonTitle="Compre Agora"
              ></Produtos>
              <Produtos
                imagemUrl="../../../imagens/classicoFazenda1k.png"
                description="Café Fazenda Floresta Especial Clássico em Grãos 1kg"
                price1="R$ 17,00"
                discount="R$ 20,00"
                buttonTitle="Compre Agora"
              ></Produtos>
              <Produtos
                imagemUrl="../../../imagens/cafearara-moidoFazenda.png"
                description="Café Fazenda Floresta Especial Arara 250g Torrado e moído"
                price1="R$ 20,00"
                discount="R$ 21,00"
                buttonTitle="Compre Agora"
              ></Produtos>
              <Produtos
                imagemUrl="../../../imagens/Coffee-Package-Mockup-INTENSO_TM_250gFazenda.png"
                description="Café Fazenda Floresta Intenso Arara 250g Torrado e moído"
                price1="R$ 100,00"
                discount="R$ 20,00"
                buttonTitle="Compre Agora"
              ></Produtos>
              <Produtos
                imagemUrl="../../../imagens/kitFazenda.png"
                description="Kit Cafés Especiais Torrado E Moído(1 Clássico / 1 Reserva / 1 Arara /1 Intenso) 4 Pacotes De 250g"
                price1="R$ 100,00"
                discount="R$ 20,00"
                buttonTitle="Compre Agora"
              ></Produtos>
            </div>
            <div className="showProdutos">
              <img src="../../../imagens/logoLor.png" alt="logo Lor" />
              <Produtos
                imagemUrl="../../../imagens/LorSulDeMinas.png"
                description="Café LOR Sul de Minas  250g Torrado e moído"
                price1="R$ 19,99"
                discount="R$ 23,00"
                buttonTitle="Compre Agora"
              ></Produtos>
              <Produtos
                imagemUrl="../../../imagens/LorCerradoMineiro.png"
                description="Café LOR Cerrado Mineiro 250g Torrado e moído"
                price1="R$ 18,99"
                discount="R$ 22,00"
                buttonTitle="Compre Agora"
              ></Produtos>
              <Produtos
                imagemUrl="../../../imagens/LorIntenso.png"
                description="Café LOR Intenso 250g Torrado e Moído"
                price1="R$ 17,00"
                discount="R$ 20,00"
                buttonTitle="Compre Agora"
              ></Produtos>
              <Produtos
                imagemUrl="../../../imagens/LorDelicado.png"
                description="Café LOR Delicado 250g Torrado e Moído "
                price1="R$ 22,00"
                discount="R$ 24,00"
                buttonTitle="Compre Agora"
              ></Produtos>
              <Produtos
                imagemUrl="../../../imagens/LorEquilibrado.png"
                description="Café LOR Equilibrado 250g Torrado e moido"
                price1="R$ 20,00"
                discount="R$ 22,00"
                buttonTitle="Compre Agora"
              ></Produtos>
            </div>
            <section className="carrossel">
              <h1>Blogs para os amantes de café </h1>
              <Carousel></Carousel>
            </section>
            <div className="showProdutos">
              <img src="../../../imagens/logo3cor.png" alt="logo fazenda" />
              <Produtos
                imagemUrl="../../../imagens/3corSuldeMinas.png"
                description="Café Sul de Minas 3 corações 100% arábica"
                price1="R$ 21,99"
                discount="R$ 23,00"
                buttonTitle="Compre Agora"
              ></Produtos>
              <Produtos
                imagemUrl="../../../imagens/3corCerrado.png"
                description="Café Cerrado Mineiro 3 corações  100% arábica"
                price1="R$ 20,00"
                discount="R$ 22,00"
                buttonTitle="Compre Agora"
              ></Produtos>
              <Produtos
                imagemUrl="../../../imagens/3corMogiana.png"
                description="Café Mogiana Paulista 3 corações 100% arábica"
                price1="R$ 19,99"
                discount="R$ 21,00"
                buttonTitle="Compre Agora"
              ></Produtos>
              <Produtos
                imagemUrl="../../../imagens/3corDarkRoast.png"
                description="Café Dark Roast 3 corações    100% arábica"
                price1="R$ 20,00"
                discount="R$ 22,00"
                buttonTitle="Compre Agora"
              ></Produtos>
              <Produtos
                imagemUrl="../../../imagens/3corPortinari.png"
                description="Café Portinari 3 corações 100% arábica"
                price1="R$ 25,00"
                discount="R$ 30,00"
                buttonTitle="Compre Agora"
              ></Produtos>
            </div>
            <CoffePass />
         
          <Footer imageUrl="../../Img/logo (1).png"></Footer>
        </Content>
      </main>
    </Container>
  );
}
