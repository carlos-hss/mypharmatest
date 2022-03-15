import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import Brands from "../pages/Brands/Brands";

const Routes = () => (
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
    </Switch>
);

export default Routes;
