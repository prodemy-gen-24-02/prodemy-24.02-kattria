import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    // selectedItem: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            //const newItem = action.payload;
            const existingItem = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.color === action.payload.color
            );
            if (existingItem) {
                state.items.forEach((item) => {
                    existingItem.quantity += action.payload.quantity;
                });
            } else {
                state.items.push({ ...action.payload });
            }
        },
        removeItem: (state, action) => {
            const { id, color } = action.payload;
            state.items = state.items.filter(
                (item) =>( item.id === id && item.color === color)
            );
            // state.selectedItem = state.selectedItem.filter(
            //     (item) =>
            //         !(item.id === action.payload.id &&
            //         item.color === action.payload.color)
            // );
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.color === action.payload.color
            );
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.color === action.payload.color
            );
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        updateQuantity: (state, action) => {
            const { id, color, quantity } = action.payload;
            const item = state.items.find(
                (item) => item.id === id && item.color === color
            );
            if (item) {
                item.quantity = quantity;
            }
        },
        // toggleSelect: (state, action) => {
        //     const { id, color } = action.payload;
        //     const exists = state.selectedItem.find(
        //         (item) => item.id === id && item.color === color
        //     );
        //     if (exists) {
        //         state.selectedItem = state.selectedItem.filter(
        //             (item) => !(item.id === id && item.color === color)
        //         );
        //     } else {
        //         state.selectedItem.push({ id, color });
        //     }
        // },
        clearCart: (state) => {
            state.items = [];
            // state.selectedItem = [];
        },
    },
});

export const {
    setCartItems,
    addItem,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    updateQuantity,
    // toggleSelect,
    clearCart,
} = cartSlice.actions;

export const fetchCart = (userId) => async (dispatch) => {
    await axios
        .get(`http://localhost:3000/cart?userId=${userId}`)
        .then((res) => dispatch(setCartItems(res.data)));
};

export default cartSlice.reducer;
