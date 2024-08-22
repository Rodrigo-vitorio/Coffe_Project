import { Container, Content, InputsInfo, Check} from "./style";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { ImgUp } from "../../Components/ImgUp";
import { EstadoDrop } from "../../Components/EstadosDrop";
import { Button } from "../../Components/Button";


export function Profile() {
  return (
    <Container>
      <Header />
      <Content>
        <main>
          <InputsInfo>
            <div className="selectImg">
              <h2>Selecione uma imagem</h2>
              <ImgUp />
            </div>
            <div>
              <input type="text" name="" id="" placeholder="Nome" />
              <input type="text" name="" id="" placeholder="Sobrenome" />
            </div>
            <div>
              <input type="text" name="" id="" placeholder="Email" />
            </div>
            <div>
              <input type="text" name="" id="" placeholder="Empresa" />
            </div>
            <div>
              <input type="text" name="" id="" placeholder="Telefone" />
            </div>{" "}
            <div>
              <input type="text" name="" id="" placeholder="Endereço" />
            </div>{" "}
            <div>
              <input type="text" name="" id="" placeholder="Complemento" />
            </div>{" "}
            <div>
              <input type="text" name="" id="" placeholder="Cidade" />
              <input type="text" name="" id="" placeholder="CEP" />
            </div>
            <Check>
              <EstadoDrop />
              <p>
                <input type="checkbox" name="CheckBox" id="CheckBoxID" />{" "}
                Endereço principal
              </p>
            </Check>
            <Button title="Salvar" />
          </InputsInfo>
        </main>
      </Content>
      <Footer />
    </Container>
  );
}
