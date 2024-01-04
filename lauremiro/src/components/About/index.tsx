import { AboutStyle } from "./style";
import code from "../../assets/code.jpg";

export const About = () => {
  return (
    <AboutStyle>
      <div className="about-container">
        <h1>Olá 👋</h1>
        <div className="text">
        <p>
          Eu sou o Marcos Lauremiro, ou simplesmente Miro. Minha trajetória é
          uma mistura de paixões que se transformou em algo incrível. Comecei na
          cozinha, explorando a arte de combinar ingredientes para criar pratos
          saborosos, mas sempre sentindo que algo estava faltando.
        </p>
        <p>
          Ao descobrir o mundo do desenvolvimento, fiquei fascinado e decidi
          fazer uma mudança radical de carreira, saindo das panelas e indo para
          o computador. Para mim, era como continuar a mesma magia, só que agora
          misturando tecnologias como ingredientes, aplicando lógicas como
          técnicas culinárias e transformando tudo em aplicações incríveis.
        </p>
        <div className="image-container">
          <img src={code} alt="" />
        </div>
        <p>
          Essa transição não foi apenas uma mudança de trabalho; foi uma
          evolução natural das minhas paixões. Hoje, ao me ver em ação, sinto
          que sou um verdadeiro chef digital. Assim como na cozinha, misturo
          elementos com maestria, aplico técnicas refinadas e, no final, crio
          algo que vai além do esperado.
        </p>
        <p>
          Ao abrir as portas do meu portfólio, é como convidar você para um
          banquete de inovação e criatividade. Ali, você encontrará não apenas
          código, mas narrativas digitais que contam a história do meu percurso.
          De experiências excepcionais a aplicações cativantes, tudo é resultado
          da minha habilidade em transformar conceitos abstratos em experiências
          palpáveis.
        </p>
        <p>
          Seja bem-vindo ao meu mundo, onde eu não só desenvolvo projetos
          incríveis, mas também teço códigos que contam histórias digitais
          irresistíveis. Venha saborear essa jornada única, onde os ingredientes
          digitais se transformam em algo que deixa um gosto duradouro no
          paladar da tecnologia.
        </p>
        </div>
      </div>
    </AboutStyle>
  );
};
