import { FaLink } from "react-icons/fa";
import { Galery } from "../galery";
import { CiHeart } from "react-icons/ci";

interface Iprops {
    emoj: string;
    status: string;
    title: string;
    text: string;
    imgs: string[];
    deta: string;
    link: string
}

export const Post = ({ emoj,status,title,text,imgs,deta, link}: Iprops) => {
  return (

      <div className="post">
        <div className="header-post">
          <div className="perfil-container">
            <div className="perfil"></div>
          </div>
          <div className="caracter">
            <div className="title">
              <h1 className="name">Miro ✨</h1>
                <span className="date">• {deta}</span>
            </div>
            <span className="status">{`${emoj} ${status}`}</span>
          </div>
        </div>
        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="text">{text}</p>
          <div className="file">
            <Galery images={imgs} className="imgs"></Galery>
          </div>
        </div>
        <div className="buttons">
          <a className="link" href={link}>
            <FaLink size="15" />
          </a>
          <span className="like">
            <CiHeart size="19" />
          </span>
        </div>
      </div>

  );
};
