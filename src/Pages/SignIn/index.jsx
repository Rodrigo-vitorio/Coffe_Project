import { Container, Content } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import {Button} from "../../Components/Button"

export function SignIn() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div className="formulario">
            <div className="container">
              <h1>Faça login e acesse</h1>
              <div className="btn-container">
                <button className="facebook">
                  <FaFacebookF /> Facebook
                </button>
                <button className="google">
                  <FaGoogle />
                  <p> Google</p>
                </button>
              </div>
              <form>
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                <a class="forgot">Esqueceu sua senha?</a>
                <Button  type="submit" title="Entrar">
                  Entrar
                </Button>
              </form>
            </div>
            <div class="signup">
                Ainda não possui conta ? <a href="#">Cadastrar</a>
              </div>
          </div>
          <Footer />
        </Content>
      </main>
    </Container>
  );
}
