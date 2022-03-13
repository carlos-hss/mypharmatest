import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Login />
        </Route>
        <Route path="/cadastro">
            <Register />
        </Route>
    </Switch>
);

export default Routes;
