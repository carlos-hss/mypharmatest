import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import Brands from "../pages/Brands/Brands";
import Categories from "../pages/Categories/Categories";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const CategoryRoute = ({ component: Component, verification, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            verification ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);

const Routes = () => {
    const verify = useSelector((state) => state.verify);

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
            <CategoryRoute
                path="/categorias"
                component={() => <Categories />}
                verification={verify}
            />
        </Switch>
    );
};

export default Routes;
