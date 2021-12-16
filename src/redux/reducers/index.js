import {combineReducers} from 'redux';
import {productsReducer} from './productReducer';
import {productReducer} from './productReducer';

const reducers = combineReducers({
    allProducts: productsReducer,
    productDetails: productReducer
})

export default reducers;