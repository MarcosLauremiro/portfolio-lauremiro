import { Posts } from "./style";
import { Post } from "./post";
import contatos from "../../assets/contatos.jpg";
import desenho4 from "../../assets/desenho-4.jpg";
import contatosApi from "../../assets/contato_api.jpg";
import contatosSalve from "../../assets/contatos_cadastro.jpg";
import contatosPerfil from "../../assets/contatos_perfil.jpg";
import desenho1 from "../../assets/desenhos-1.jpg";
import desenho2 from "../../assets/desenhos-2.jpg";
import desenho3 from "../../assets/desenhos-3.jpg";
import burge from "../../assets/burgue.jpg";
import burgeCart from "../../assets/burgue_cart.jpg";
import rpg from "../../assets/rpg.jpg";
import rpgBeg from "../../assets/rpg_begs.jpg";
import rpgCart from "../../assets/rpg_cart.jpg";
import hub from "../../assets/hub.jpg"
import hubRegister from "../../assets/hub_register.jpg"
import hubDash from "../../assets/hub_dash.jpg"
import code from "../../assets/code.jpg"
import codeVS from "../../assets/csCode.jpg"


export const Feed = () => {
  const imagesFullStack = [
    contatos,
    contatosSalve,
    contatosPerfil,
    contatosApi,
  ];
  const imgHoby = [desenho4, desenho1, desenho2, desenho3];
  const burgue = [burge, burgeCart];
  const RPG = [rpg, rpgBeg, rpgCart];
  const HUB = [hub, hubRegister, hubDash]
  const codeImg = [code,codeVS]

  return (
    <Posts>
      <div className="posts-container">
        <Post
          emoj="☕"
          status="Inspirado"
          title="Olá Mundo!"
          text="Este é meu site onde posto o que estou fazendo e como fazer coisas com 
          codigo quer saber com mais detalhes sobre toda minha tragetoria, dê uma olhada 
          /sobre mim"
          imgs={codeImg}
          deta="30 dez 2023"
          link=""
        />

        <Post
          emoj="💻"
          status="Produtivo"
          title="Um projeto Full Stack"
          text="Um projeto bem desafiador onde eu coloquei em pratica parte de
          todo conteudo estudado durante o ano de 2023, uma aplicação de
          gestão de contatos e usuario."
          imgs={imagesFullStack}
          deta="19 dez 2023"
          link="https://youtu.be/H34lK8umgJQ"
        />

        <Post
          emoj="😍"
          status="Apaixonado"
          title="Meu projeto Preferio"
          text="Este projeto foi concebido nos primeiros estágios dos meus estudos, 
          e recordo-me vividamente do desafio de transformar a ideia da mente para o código.
          Trata-se de um e-commerce que comercializa artigos de
          RPG (Role Playing Game), e este é o resultado alcançado."
          imgs={RPG}
          deta="20 Mar 2023"
          link="https://github.com/MarcosLauremiro/ecommerce-rpg-storage"
        />

        <Post
          emoj="🤓"
          status="Inteligente"
          title="Hub"
          text="Um projeto em front-end e React elaborado para colocar em prática o 
          conhecimento no uso de API e Context, visando aprimorar a lógica da aplicação."
          imgs={HUB}
          deta="16 Jun 2023"
          link="https://github.com/MarcosLauremiro/venda-de-lanche"
        />

        <Post
          emoj="😋"
          status="Faminto"
          title="Loja de rpg"
          text="Um projeto fascinante no qual apliquei parte dos meus conhecimentos em front-end e 
          React para desenvolver a interface de uma aplicação destinada a uma lanchonete."
          imgs={burgue}
          deta="16 Jun 2023"
          link="https://github.com/MarcosLauremiro/venda-de-lanche"
        />

        <Post
          emoj="🎨"
          status="Artista"
          title="Um Hobby"
          text="Uma das atividades que mais aprecio é desenhar, concentrar-me e
          transformar rabiscos em arte. Essa prática me proporciona uma
          sensação de paz e uma conexão profunda com o mundo, distante das
          tecnologias."
          imgs={imgHoby}
          deta="19 dez 2023"
          link=""
        />
      </div>
    </Posts>
  );
};
