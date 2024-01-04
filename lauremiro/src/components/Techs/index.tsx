import { TechStyle } from "./style";
import { FaCss3Alt, FaHtml5, FaNode, FaNodeJs, FaReact } from "react-icons/fa";

export const Techs = () => {
  return (
    <TechStyle>
      <div className="techs-container">
        <p>Principais Tecnologias!</p>
        <div className="techs">
          <FaNode size="42" />
          <FaNodeJs size="42" />
          <FaHtml5 size="42" />
          <FaCss3Alt size="42" />
          <FaReact size="42" />
        </div>
      </div>
    </TechStyle>
  );
};
