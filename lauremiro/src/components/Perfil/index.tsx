import { Techs } from "../Techs";
import { DetailPerfil } from "./DetailPerfil";
import { PerfilStyle } from "./styles";
import { FaTwitter } from "react-icons/fa";

export const Perfil = () => {
  return (
    <PerfilStyle>
      <div className="perfil-container">
        <div className="capa"></div>
        <div className="photo-container">
          <div className="photo-perfil">
            <div className="photo"></div>
          </div>
          <div className="follow">
            <a target="blank" href="https://twitter.com/Miroprogramador">Follow <FaTwitter /></a>
          </div>
        </div>
        <DetailPerfil/>
        <Techs/>
      </div>
    </PerfilStyle>
  );
};
