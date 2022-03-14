import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Login />
        </Route>
        <Route path="/cadastro">
            <Register />
        </Route>
        <Route path="/dashboard">
            <Dashboard />
        </Route>
    </Switch>
);

export default Routes;
