import {ActionTypes} from '../actionTypes';

const initialState = [];   

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS :
            return action.payload;    
        default: 
            return state    
    }
}

export const productReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCT:
            return action.payload;
        case ActionTypes.REMOVE_PRODUCT:
            return {}    
        default:
            return state    
    }
} 