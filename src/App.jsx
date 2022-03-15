import styled from "styled-components";
import Routes from "./routes/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsThunk } from "./store/modules/products/thunks";
import { getBrandsThunk } from "./store/modules/brands/thunks";

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

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getBrandsThunk());
    }, [dispatch]);

    return (
        <DivApp>
            <Routes />
        </DivApp>
    );
};

export default App;
