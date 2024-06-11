const initialState = {
    items : [],
};

const  CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id && item.color === action.payload.calor);
            if (itemIndex >=0) {
                const newItems = [...state.items];
                newItems[itemIndex].quantity += action.payload.quantity;
                return {...state, items:newItems}
            } else{
                return{...state, items: [...state.items, {...action.payload}] }
            }           
        case 'REMOVE_FROM_CART':
            return {...state, items: state.items.filter(item=> item.id !==action.payload.id || item.color !== action.payload.color)}
        case 'UPDATE_QUANTITY':
            return{
                ...state, items:state.items.map(item => item.id === action.payload.id && item.color ===action.payload.color? {... item, quantity: action.payload.quantity}:item)
            }

        default:
            return state;;
    }
}
export default CartReducer