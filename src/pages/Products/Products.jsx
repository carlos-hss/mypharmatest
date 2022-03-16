import {
    Card,
    DivAll,
    SectionAll,
    SectionFilters,
    SectionModal,
    DivModal,
    BodyModal,
    ExitSymbol,
} from "../../components/GlobalComponents/GlobalComponents";
import { useState } from "react";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import {
    removeProductsThunk,
    editProductsThunk,
    postProductsThunk,
} from "../../store/modules/products/thunks";

const Products = () => {
    const [modalEdit, setModalEdit] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);
    const [object, setObject] = useState({});

    const listProducts = useSelector((state) => state.listProducts);
    const dispatch = useDispatch();

    const handleClickDelete = (id) => {
        dispatch(removeProductsThunk(id));
    };
    const handleClickEdit = (data, id) => {
        dispatch(editProductsThunk(data, id));
    };
    const handleClickPost = (data) => {
        dispatch(postProductsThunk(data));
    };

    return (
        <>
            {modalEdit && (
                <SectionModal>
                    <ExitSymbol
                        onClick={() => {
                            setObject({});
                            setModalEdit(!modalEdit);
                        }}
                    >
                        <div />
                        <div />
                    </ExitSymbol>
                    <DivModal height={550}>
                        <h2>Editar Produto</h2>

                        <BodyModal
                            height={490}
                            onSubmit={(evt) => {
                                evt.preventDefault();
                                handleClickEdit(object, object._id);
                                setObject({});
                                setModalEdit(!modalEdit);
                            }}
                        >
                            <div>
                                <label>Nome:</label>
                                <input
                                    onChange={(evt) => {
                                        setObject({
                                            ...object,
                                            name: evt.target.value,
                                        });
                                    }}
                                    value={object.name}
                                    placeholder="Nome"
                                    type="text"
                                />
                                <label>Descrição:</label>
                                <input
                                    onChange={(evt) => {
                                        setObject({
                                            ...object,
                                            description: evt.target.value,
                                        });
                                    }}
                                    value={object.description}
                                    placeholder="Descrição"
                                    type="text"
                                />
                                <label>Preço:</label>
                                <input
                                    onChange={(evt) => {
                                        setObject({
                                            ...object,
                                            price: evt.target.value,
                                        });
                                    }}
                                    value={object.price}
                                    placeholder="Preço"
                                    type="text"
                                />
                                <label>Estoque:</label>
                                <input
                                    onChange={(evt) => {
                                        setObject({
                                            ...object,
                                            inventory: evt.target.value,
                                        });
                                    }}
                                    value={object.inventory}
                                    placeholder="Estoque"
                                    type="text"
                                />
                                <label>Categoria:</label>
                                <input
                                    onChange={(evt) => {
                                        setObject({
                                            ...object,
                                            category: evt.target.value,
                                        });
                                    }}
                                    value={object.category}
                                    placeholder="Categoria"
                                    type="text"
                                />
                                <label>Marca:</label>
                                <input
                                    onChange={(evt) => {
                                        setObject({
                                            ...object,
                                            brand: evt.target.value,
                                        });
                                    }}
                                    value={object.brand}
                                    placeholder="Marca"
                                    type="text"
                                />
                            </div>
                            <button type="submit">Editar</button>
                        </BodyModal>
                    </DivModal>
                </SectionModal>
            )}

            {modalRegister && (
                <SectionModal>
                    <ExitSymbol
                        onClick={() => {
                            setObject({});
                            setModalRegister(!modalRegister);
                        }}
                    >
                        <div />
                        <div />
                    </ExitSymbol>
                    <DivModal height={570}>
                        <h2>Cadastrar Produto</h2>

                        <BodyModal
                            height={530}
                            onSubmit={(evt) => {
                                evt.preventDefault();
                                handleClickPost({
                                    ...object,
                                    price: Number(object.price),
                                    inventory: Number(object.inventory),
                                });
                                setObject({});
                                setModalRegister(!modalRegister);
                            }}
                        >
                            <div>
                                <label>Nome:</label>
                                <input
                                    onChange={(evt) => {
                                        setObject({
                                            ...object,
                                            name: evt.target.value,
                                        });
                                    }}
                                    placeholder="Nome"
                                    type="text"
                                    required
                                />
                                <label>Descrição:</label>
                                <input
                                    onChange={(evt) => {
                                        setObject({
                                            ...object,
                                            description: evt.target.value,
                                        });
                                    }}
                                    placeholder="Descrição"
                                    type="text"
                                    required
                                />
                                <label>Preço:</label>
                                <input
                                    onChange={(evt) => {
                                        setObject({
                                            ...object,
                                            price: evt.target.value,
                                        });
                                    }}
                                    placeholder="Preço"
                                    type="text"
                                    required
                                />
                                <label>Estoque:</label>
                                <input
                                    onChange={(evt) => {
                                        setObject({
                                            ...object,
                                            inventory: evt.target.value,
                                        });
                                    }}
                                    placeholder="Estoque"
                                    type="text"
                                    required
                                />
                                <label>Categoria:</label>
                                <input
                                    onChange={(evt) => {
                                        setObject({
                                            ...object,
                                            category: evt.target.value,
                                        });
                                    }}
                                    placeholder="Categoria"
                                    type="text"
                                    required
                                />
                                <label>Marca:</label>
                                <input
                                    onChange={(evt) => {
                                        setObject({
                                            ...object,
                                            brand: evt.target.value,
                                        });
                                    }}
                                    placeholder="Marca"
                                    type="text"
                                    required
                                />
                            </div>
                            <button type="submit">Cadastrar</button>
                        </BodyModal>
                    </DivModal>
                </SectionModal>
            )}

            <SectionAll>
                <Header />
                <h1>Produtos</h1>
                <SectionFilters>
                    <div>
                        <button
                            onClick={() => setModalRegister(!modalRegister)}
                        >
                            Cadastrar Produto
                        </button>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Ex: Cimed, Cimegrip..."
                        />
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

                            <div>
                                <button
                                    onClick={() => {
                                        setObject({ ...product });
                                        setModalEdit(!modalEdit);
                                    }}
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() =>
                                        handleClickDelete(product._id)
                                    }
                                >
                                    Excluir
                                </button>
                            </div>
                        </Card>
                    ))}
                </DivAll>
            </SectionAll>
        </>
    );
};

export default Products;
