import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity;
        },
        decreaseQuantity: (state, action) => {
            // state.quantity -= 1;
            // state.products.pull(action.payload)
            // state.total += action.payload.price * action.payload.quantity;  
            // let index = state.products.indexOf(action.payload);
            // console.log(index);
            // state.products.splice(index, 1)
            state.products[action.payload].quantity -= 1;
            // state.total +=state.products.price * state.products.quantity;
            state.total -= state.products[action.payload].price ;
        },
        increaseQuantity: (state, action) => {
            state.products[action.payload].quantity += 1;
            state.total += state.products[action.payload].price ;
        },
        deleteCart: (state, action) => {
            state.products = [];
            state.quantity = 0
            state.total = 0
        }
    },
});

export const { addProduct, decreaseQuantity, increaseQuantity, deleteCart } = cartSlice.actions
export default cartSlice.reducer;
