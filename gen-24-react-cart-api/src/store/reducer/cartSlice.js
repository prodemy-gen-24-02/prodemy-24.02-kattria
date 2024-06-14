import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name:'cart',
    initialState : {...initialState},
    reducers:{
        setCartItems:(state,action)=>{
            state.items = action.payload;
        },
        addItem:(state,action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id && item.color === action.payload.color);
            if(existingItem){
                state.items.forEach((item) => {
                    existingItem.quantity += action.payload.quantity;
                })
            } else {
                state.items.push({...action.payload, selected:true});
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => (item.id !== action.payload.id || item.color !== action.payload.color));
        },
        incrementQuantity : (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id && item.color === action.payload.color);
            if (item){
                item.quantity++;
            }
        },
        decrementQuantity : (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id && item.color === action.payload.color);
            if (item && item.quantity>1){
                item.quantity--;
            }
        },
        updateQuantity: (state, action)=> {
            const item = state.items.find(item => item.id === action.payload.id && item.color===action.payload.color);
            if (item){
                item.quantity = action.payload.quantity
            }
        },
        toggleSelect: (state,action) => {
            const item = state.items.find(item => item.id === action.payload.id && item.color===action.payload.color );
            if (item){
                item.selected = !item.selected;
            }
        },
        // clearCart: (state) => {
        //     state.items=[]
        // }
    }
})

export const {setCartItems, addItem, removeItem, incrementQuantity, decrementQuantity,updateQuantity,toggleSelect} = cartSlice.actions;
export default cartSlice.reducer;