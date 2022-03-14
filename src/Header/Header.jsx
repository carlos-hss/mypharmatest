import HeaderStyled from "./Styled";
import BurgerSymbol from "./BurgerSymbol";
import Logo from "../assets/MyPharmaLogo1.png";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <HeaderStyled>
            <img src={Logo} alt="logo" />
            <BurgerSymbol />
            <NavBar />
        </HeaderStyled>
    );
};

export default Header;
