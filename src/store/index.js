import {createStore, combineReducers} from "redux"
import ProductsReducer from "./reducers/ProductsReducer"
const root = combineReducers({
    ProductsReducer
});
const store = createStore(root);
export default store;