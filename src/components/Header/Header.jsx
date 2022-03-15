import HeaderStyled from "./Styled";
import BurgerSymbol from "./BurgerSymbol";
import Logo from "../../assets/MyPharmaLogo1.png";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HeaderStyled>
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <BurgerSymbol />
            <NavBar />
        </HeaderStyled>
    );
};

export default Header;
