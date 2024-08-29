import { Container,Imagem, Texto} from "./style";

export function LinksProduto({ imagemUrl, children }) {
    return (
      <Container>
       
          <Imagem imagemUrl={imagemUrl} />
          <Texto>{children}</Texto>
          

      </Container>
    );
  }