import { Posts } from "./style";
import code from "../../assets/code.jpg";
import { FaLink } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePushPin } from "react-icons/md";
import contatos from "../../assets/contatos.jpg";
import desenho1 from "../../assets/desenhos-1.jpg";
import desenho2 from "../../assets/desenhos-2.jpg";
import desenho3 from "../../assets/desenhos-3.jpg";
import desenho4 from "../../assets/desenho-4.jpg";

export const Feed = () => {
  return (
    <Posts>
      <div className="posts-container">
        <div className="post">
          <div className="header-post">
            <div className="perfil-container">
              <span>
                <MdOutlinePushPin size="15" /> Twitter fixado
              </span>
              <div className="perfil"></div>
            </div>
            <div className="caracter">
              <div className="title">
                <h1 className="name">Miro ✨</h1>
                <span className="date">• 30 dez 2023</span>
              </div>
              <span className="status"> ☕ Inspirado</span>
            </div>
          </div>
          <div className="content">
            <h1 className="title">Olá Mundo!</h1>
            <p className="text">
              Este é meu site onde posto o que estou fazendo e como fazer coisas
              com codigo quer saber com mais detalhes sobre toda minha
              tragetoria, dê uma olhada <a href="/">/sobre mim</a>
            </p>
            <div className="file">
              <img src={code} alt="" />
            </div>
          </div>
          <div className="buttons">
            <a className="link" href="">
              <FaLink size="15" />
            </a>
            <span className="like">
              <CiHeart size="19" />
            </span>
          </div>
        </div>

        <div className="post">
          <div className="header-post">
            <div className="perfil-container">
              <div className="perfil"></div>
            </div>
            <div className="caracter">
              <div className="title">
                <h1 className="name">Miro ✨</h1>
                <span className="date">• 30 dez 2023</span>
              </div>
              <span className="status"> 💻 Produtivo </span>
            </div>
          </div>
          <div className="content">
            <h1 className="title">Um projeto Full Stack</h1>
            <p className="text">
              Um projeto bem desafiador onde eu coloquei em pratica parte de
              todo conteudo estudado durante o ano de 2023, uma aplicação de
              gestão de contatos e usuario.
            </p>
            <div className="file">
              <img src={contatos} />
            </div>
          </div>
          <div className="buttons">
            <a
              className="link"
              target="blank"
              href="https://youtu.be/H34lK8umgJQ"
            >
              <FaLink size="15" />
            </a>
            <span className="like">
              <CiHeart size="19" />
            </span>
          </div>
        </div>

        <div className="post">
          <div className="header-post">
            <div className="perfil-container">
              <div className="perfil"></div>
            </div>
            <div className="caracter">
              <div className="title">
                <h1 className="name">Miro ✨</h1>
                <span className="date">• 30 dez 2023</span>
              </div>
              <span className="status"> ☕ Inspirado</span>
            </div>
          </div>
          <div className="content">
            <h1 className="title">Um Hobby</h1>
            <p className="text">
              Uma das atividades que mais aprecio é desenhar, concentrar-me e
              transformar rabiscos em arte. Essa prática me
              proporciona uma sensação de paz e uma conexão profunda com o
              mundo, distante das tecnologias.
            </p>
            <div className="file">
              <img src={desenho4} alt="" />
            </div>
          </div>
          <div className="buttons">
            <a className="link" href="">
              <FaLink size="15" />
            </a>
            <span className="like">
              <CiHeart size="19" />
            </span>
          </div>
        </div>
      </div>
    </Posts>
  );
};
