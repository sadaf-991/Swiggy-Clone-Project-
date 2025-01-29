import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {

        addItem: (state, action) => {
       const item = action.payload; 

           const existingItems = state.items.find((cartItem) => cartItem.id === item.id);
          
           if(existingItems){
            existingItems.quantity += 1;
           }else{
            state.items.push({ ...item, quantity: 1 });
           }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find((i) => i.id === itemId);
      
            if (existingItem?.quantity > 1) {
              existingItem.quantity -= 1;  // ✅ Decrease quantity if more than 1
            } else {
              state.items = state.items.filter((item) => item.id !== itemId);  // ✅ Remove item if quantity is 1
            }
          },
        clearCart: (state) => {
            state.items = [];
        },
    },

});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;