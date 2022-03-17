import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import Brands from "../pages/Brands/Brands";
import Categories from "../pages/Categories/Categories";
import { Redirect } from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/cadastro">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/produtos">
                <Products />
            </Route>
            <Route path="/marcas">
                <Brands />
            </Route>
            <Route path="/categorias">
                {!localStorage.getItem("@token") ? (
                    <Redirect to="/login" />
                ) : (
                    <Categories />
                )}
            </Route>
        </Switch>
    );
};

export default Routes;
