import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./modules/product/reducer";

const reducers = combineReducers({ products: productReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
