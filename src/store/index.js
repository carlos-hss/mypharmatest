import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./modules/products/reducer";
import brandsReducer from "./modules/brands/reducer";

const reducers = combineReducers({
    listProducts: productReducer,
    listBrands: brandsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
