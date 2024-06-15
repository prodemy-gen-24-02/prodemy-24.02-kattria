import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    selectedItem: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState: { ...initialState },
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id && item.color === newItem.color
            );
            if (existingItem) {
                // state.items.forEach((item) => {
                existingItem.quantity += newItem.quantity;
                // })
            } else {
                state.items.push({ newItem });
            }
        },
        removeItem: (state, action) => {
            const { id, color } = action.payload;
            state.items = state.items.filter(
                (item) => item.id !== id || item.color !== color
            );
            state.selectedItem = state.selectedItem.filter(
                (item) =>
                    item.id !== action.payload.id ||
                    item.color !== action.payload.color
            );
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
        toggleSelect: (state, action) => {
            const { id, color } = action.payload;
            const exists = state.selectedItem.find(
                (item) => item.id === id && item.color === color
            );
            if (exists) {
                state.selectedItem = state.selectedItem.find(
                    (item) => !(item.id === id && item.color === color)
                );
            } else {
                state.selectedItem.push({ id, color });
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.selectedItem = [];
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
    toggleSelect,
    clearCart,
} = cartSlice.actions;

export const fetchCart = (userId) => async (dispatch) => {
    await axios
        .get(`http://localhost:3000/cart?userId=${userId}`)
        .then((res) => dispatch(setCartItems(res.data)));
};

export const addtToCart = (item, userId) => async (dispatch, getState) => {
    const { items } = getState().cart;
    const existingItem = items.find(
        (cartItem) => cartItem.id === item.id && cartItem.color === item.color
    );

    if (existingItem) {
        const updateItem = {
            ...existingItem,
            quantity: existingItem.quantity + item.quantity,
        };
        await axios.put(
            `http://localhost:3000/cart/${existingItem.id}`,
            updateItem
        );
        dispatch(addItem(updateItem));
    } else {
        const response = await axios.post(`http://localhost:3000/cart`, {
            ...item,
            userId,
        });
        dispatch(addItem(response.data));
    }
};

export const removeFromCart = (id, color) => async (dispatch) => {
    await axios.delete(`hattp:localhost:3000/cart/${id}`);
    dispatch(removeItem({ id, color }));
};

export default cartSlice.reducer;
