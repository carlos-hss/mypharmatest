import styled from "styled-components";
import Routes from "./routes/Router";

const DivApp = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
`;

const App = () => {
    return (
        <DivApp>
            <Routes />
        </DivApp>
    );
};

export default App;
