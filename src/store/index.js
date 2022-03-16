import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./modules/products/reducer";
import brandsReducer from "./modules/brands/reducer";
import usersReducer from "./modules/login/reducer";

const reducers = combineReducers({
    listProducts: productReducer,
    listBrands: brandsReducer,
    listUsers: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
