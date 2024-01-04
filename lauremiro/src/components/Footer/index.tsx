import { FaGithub, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { FooterStyle } from "./style"

export const Footer = () => {
    return(
        <FooterStyle>
            <div className="footer-container">
                <div className="links">
                    <a target="blank" href="https://twitter.com/Miroprogramador"><FaXTwitter size='22' /></a>
                    <a target="blank" href=""><FaInstagram size='22' /></a>
                    <a target="blank" href=""><FaGithub size='22' /></a>
                    <a target="blank" href=""><FaYoutube size='22' /></a>
                </div>
                <div className="brand"><span>Miro ©2023</span></div>
            </div>
        </FooterStyle>
    )
}