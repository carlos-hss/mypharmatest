import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Inter';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
}

:root {
    --blue-1: #273f8a;
    --blue-2: #00A5FE;
    --blue-3: #CAE8FE;
    --white: #FFFFFF;
    --gray: #151519;
    --white-gray: #F7F8F9;
}

html {
    height: 100%;
    width: 100%;

    body {
        margin: 0;
    }

    div{
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

button {
    cursor: pointer;
}
`;

export default FontStyles;
