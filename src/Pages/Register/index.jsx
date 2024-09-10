import { Container, Content } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";
export function Register() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div className="formulario">
            <div className="container">
              <h1>Registre-se</h1>
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
                <input type="text" placeholder="Nome de exibição" required />
                <input
                  type="text"
                  placeholder="Telefone(completo com DDD"
                  required
                />
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                <input type="password" placeholder="Confirme senha" required />
                <p class="forgot">
                  Ao clicar em “Registrar”, você concorda com nossos termos de
                  serviço e reconhece que leu nossa política de privacidade.
                </p>
                <Button type="submit" title="Registrar">
                  Entrar
                </Button>
              </form>
            </div>
            <div class="signup">
              Já possui conta ? <Link to="/SignIn">Entrar</Link>
            </div>
          </div>
          <Footer />
        </Content>
      </main>
    </Container>
  );
}
