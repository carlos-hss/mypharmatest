import {
    DivAll,
    SectionAll,
    SectionFilters,
    SectionModal,
    DivModal,
    BodyModal,
    ExitSymbol,
} from "../../components/GlobalComponents/GlobalComponents";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import {
    editBrandsThunk,
    postBrandsThunk,
    removeBrandsThunk,
} from "../../store/modules/brands/thunks";
import { useState } from "react";

const Brands = () => {
    const [modalEdit, setModalEdit] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);
    const [object, setObject] = useState({});

    const listBrands = useSelector((state) => state.listBrands);
    const dispatch = useDispatch();

    const handleClickDelete = (id) => {
        dispatch(removeBrandsThunk(id));
    };
    const handleClickEdit = (data, id) => {
        dispatch(editBrandsThunk(data, id));
    };
    const handleClickPost = (data) => {
        dispatch(postBrandsThunk(data));
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
                    <DivModal height={200}>
                        <h2>Editar Marca</h2>

                        <BodyModal
                            height={150}
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
                    <DivModal height={200}>
                        <h2>Cadastrar Marca</h2>

                        <BodyModal
                            height={150}
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
                            </div>
                            <button type="submit">Cadastrar</button>
                        </BodyModal>
                    </DivModal>
                </SectionModal>
            )}
            <SectionAll>
                <Header />
                <h1>Marcas</h1>
                <SectionFilters>
                    <div>
                        <button
                            onClick={() => setModalRegister(!modalRegister)}
                        >
                            Cadastrar Marca
                        </button>

                        <input
                            type="text"
                            placeholder="Ex: Cimed, Cimegrip..."
                        />
                    </div>
                </SectionFilters>
                <DivAll>
                    {listBrands.map((brand, index) => (
                        <h2
                            onClick={() => {
                                setObject({ ...brand });
                                setModalEdit(!modalEdit);
                            }}
                            className="h2--brand"
                            key={index}
                        >{`${brand.name}`}</h2>
                    ))}
                </DivAll>
            </SectionAll>
        </>
    );
};

export default Brands;
