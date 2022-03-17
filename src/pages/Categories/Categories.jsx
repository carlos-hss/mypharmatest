import {
    DivAll,
    SectionAll,
    SectionFilters,
    SectionModal,
    DivModal,
    BodyModal,
    ExitSymbol,
    FormSearch,
} from "../../components/GlobalComponents/GlobalComponents";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import {
    editCategoryThunk,
    postCategoryThunk,
    removeCategoryThunk,
} from "../../store/modules/categories/thunks";
import { useState } from "react";
import { setCategoriesEndpointThunk } from "../../store/modules/endpoint/thunks";
import SearchIcon from "../../assets/Lupa.png";

const Categories = () => {
    const [modalEdit, setModalEdit] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);
    const [object, setObject] = useState({});
    const [searchText, setSeachText] = useState("");

    const listCategories = useSelector((state) => state.listCategories);
    const dispatch = useDispatch();

    const handleClickDelete = (id) => {
        dispatch(removeCategoryThunk(id));
    };
    const handleClickEdit = (data, id) => {
        dispatch(editCategoryThunk(data, id));
    };
    const handleClickPost = (data) => {
        dispatch(postCategoryThunk(data));
    };

    const handleClickFilters = (data) => {
        dispatch(setCategoriesEndpointThunk(data));
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
                    <DivModal height={270}>
                        <h2>Editar Marca</h2>

                        <BodyModal
                            height={220}
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
                                <div className="div--buttons">
                                    <button type="submit">Editar</button>
                                    <button
                                        onClick={(evt) => {
                                            evt.preventDefault();
                                            handleClickDelete(object._id);
                                            setObject({});
                                            setModalEdit(!modalEdit);
                                        }}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </div>
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
                    <DivModal height={270}>
                        <h2>Cadastrar Categoria</h2>

                        <BodyModal
                            height={220}
                            onSubmit={(evt) => {
                                evt.preventDefault();
                                handleClickPost(object);
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
                            </div>
                            <button type="submit">Cadastrar</button>
                        </BodyModal>
                    </DivModal>
                </SectionModal>
            )}
            <SectionAll>
                <Header />
                <h1>Categorias</h1>
                <SectionFilters>
                    <button onClick={() => setModalRegister(!modalRegister)}>
                        Cadastrar Categoria
                    </button>

                    <div>
                        <FormSearch
                            onSubmit={(evt) => {
                                evt.preventDefault();
                                handleClickFilters(`/${searchText}`);
                            }}
                        >
                            <input
                                onChange={(evt) => {
                                    setSeachText(evt.target.value);
                                }}
                                className="input"
                                type="text"
                                placeholder="Ex: Cimed, Cimegrip..."
                            />
                            <button type="submit">
                                <img src={SearchIcon} alt="" />
                            </button>
                        </FormSearch>
                        <select
                            onChange={(evt) => {
                                handleClickFilters(evt.target.value);
                            }}
                        >
                            <option value="/">Todos</option>
                            <option value="/filtros/nome-a-z">Nomes A-Z</option>
                            <option value="/filtros/nome-z-a">Nomes Z-A</option>
                        </select>
                    </div>
                </SectionFilters>
                <DivAll>
                    {listCategories.map((category, index) => (
                        <h2
                            onClick={() => {
                                setObject({ ...category });
                                setModalEdit(!modalEdit);
                            }}
                            className="h2--category"
                            key={index}
                        >{`${category.name}`}</h2>
                    ))}
                </DivAll>
            </SectionAll>
        </>
    );
};

export default Categories;
