import {
    DivAll,
    SectionAll,
} from "../../components/GlobalComponents/GlobalComponents";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";

const Brands = () => {
    const listBrands = useSelector((state) => state.listBrands);

    return (
        <SectionAll>
            <Header />
            <h1>Marcas</h1>
            <DivAll>
                {listBrands.map((product, index) => (
                    <h2
                        className="h2--brand"
                        key={index}
                    >{`${product.name}`}</h2>
                ))}
            </DivAll>
        </SectionAll>
    );
};

export default Brands;
