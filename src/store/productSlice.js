import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts(url) {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));

        try{
            const res = await axios.get(url)
            const data = await res.data
            // console.log( data)
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.IDLE))
        }
        catch(err) {
            // console.log(err)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}