import { HeaderStyle } from "./style"
import { FaDev } from "react-icons/fa";

export const Header = () => {
    return (
        <HeaderStyle>
            <button className="logo"><FaDev color='#f1f3f5' size='20' /></button>
        </HeaderStyle>
    )
}