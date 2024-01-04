import { DetailStyle } from "./styles";
import { MdVerified } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaRegCalendarAlt } from "react-icons/fa";

export const DetailPerfil = () => {
  return (
    <DetailStyle>
      <div className="name">
        <h1>
          Marcos Lauremiro <MdVerified color="#d9048e" />
        </h1>
      </div>
      <div className="short-description">
        <span>Dê vida às ideias com código! ✨</span>
      </div>
      <div className="description">
        <p>
          Engenheiro Web Junior. Desenvolvedor criativo. Criador de conteúdo.
          Especialista em Front-end Back-end.
        </p>
      </div>
      <div className="detail">
        <span>
          <MdEventAvailable /> Disponivel
        </span>
        <a target="blank" href="https://buttons-hazel.vercel.app/">
          <FaLink /> /Links
        </a>
        <span>
          <LiaBirthdayCakeSolid /> 21 de Setembro
        </span>
        <span>
          <FaRegCalendarAlt /> Desde 2022
        </span>
      </div>
    </DetailStyle>
  );
};
