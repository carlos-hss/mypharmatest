import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    font-family: 'Fredoka', sans-serif;
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

    #root{
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

a {
    text-decoration: none;
}

`;
