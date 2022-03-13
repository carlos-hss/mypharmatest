import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FontStyles from "./styles/Global";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <FontStyles />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
