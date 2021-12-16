import axios from 'axios';
import {ActionTypes} from '../actionTypes';
import {baseUrl} from '../apiCalls/fakeStoreApi';

export const fetchProducts = () => {
    return async (dispatch) => {
       const data = await axios.get(`${baseUrl}/products`)
       dispatch({type:ActionTypes.FETCH_PRODUCTS, payload: data.data})
    }
}

export const fetchProduct = (id) => {
    return async (dispatch) => {
       const data = await axios.get(`${baseUrl}/products/${id}`)
       dispatch({type:ActionTypes.FETCH_PRODUCT, payload: data.data})
    }
} 

export const removeProductDetails = () => {
    return {
        type: ActionTypes.REMOVE_PRODUCT
    }
}