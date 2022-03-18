import styled from "styled-components";
import Routes from "./routes/Router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "./store/modules/products/thunks";
import { getBrandsThunk } from "./store/modules/brands/thunks";
import { getUsersThunk } from "./store/modules/login/thunks";
import { getCategoriesThunk } from "./store/modules/categories/thunks";
import { ToastContainer } from "react-toastify";
import { setVerifyThunk } from "./store/modules/verify/thunks";

const DivApp = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
`;

const App = () => {
    const dispatch = useDispatch();
    const endpoints = useSelector((state) => state.endpoints);
    const verify = useSelector((state) => state.verify);

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [dispatch, endpoints.products]);

    useEffect(() => {
        dispatch(getBrandsThunk());
    }, [dispatch, endpoints.brands]);

    useEffect(() => {
        dispatch(getUsersThunk());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCategoriesThunk());
    }, [dispatch, endpoints.categories]);

    useEffect(() => {
        dispatch(setVerifyThunk(localStorage.getItem("@token")));
    }, [dispatch, verify]);

    return (
        <DivApp>
            <Routes />
            <ToastContainer />
        </DivApp>
    );
};

export default App;
