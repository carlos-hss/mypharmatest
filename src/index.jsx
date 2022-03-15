import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/Global";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

console.log(store.dispatch);

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
