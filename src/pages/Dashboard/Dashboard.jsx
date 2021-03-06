import {
    SectionAll,
    DivAll,
    DivHome,
    CardHome,
    DivImage,
} from "../../components/GlobalComponents/GlobalComponents";
import Header from "../../components/Header/Header";
import Image from "../../assets/cart.png";
import { Link } from "react-router-dom";

const Dashboard = () => (
    <SectionAll>
        <Header />
        <DivAll>
            <DivHome>
                <Link to="/produtos">
                    <CardHome>
                        <h2>Produtos</h2>
                    </CardHome>
                </Link>

                <Link to="/marcas">
                    <CardHome>
                        <h2>Marcas</h2>
                    </CardHome>
                </Link>

                <Link to="/categorias">
                    <CardHome>
                        <h2>Categorias</h2>
                    </CardHome>
                </Link>
            </DivHome>
            <DivImage>
                <img src={Image} alt="Imagem Home" />
            </DivImage>
        </DivAll>
    </SectionAll>
);

export default Dashboard;
