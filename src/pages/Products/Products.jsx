import {
    Card,
    DivAll,
    SectionAll,
    SectionFilters,
} from "../../components/GlobalComponents/GlobalComponents";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";

const Products = () => {
    const listProducts = useSelector((state) => state.listProducts);

    return (
        <SectionAll>
            <Header />
            <h1>Produtos</h1>
            <SectionFilters>
                <div>
                    <button>Cadastrar</button>
                    <button>Editar</button>
                    <button>Excluir</button>
                </div>
                <div>
                    <input type="text" placeholder="Ex: Cimed, Cimegrip..." />
                    <select>
                        <option value="">Todos</option>
                        <option value="name">Nome</option>
                        <option value="description">Descrição</option>
                        <option value="brand">Marca</option>
                        <option value="category">Categoria</option>
                    </select>
                </div>
            </SectionFilters>
            <DivAll>
                {listProducts.map((product, index) => (
                    <Card key={index}>
                        <h3>{`${product.name}`}</h3>
                        <small>{`Descrição: ${product.description}`}</small>

                        <p>{`${product.price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}`}</p>

                        <p>{`Estoque: ${product.inventory}`}</p>

                        <p>{`Categoria: ${product.category}`}</p>
                        <p>{`Marca: ${product.brand}`}</p>
                    </Card>
                ))}
            </DivAll>
        </SectionAll>
    );
};

export default Products;
