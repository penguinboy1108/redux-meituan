// editing store
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"; 

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        //goodslist
        foodsList: [],
        //Menu active
        activeIndex: 0,
        // Cart
        cartList:[],
    },
    reducers :{
        setFoodsList(state, action){
            state.foodsList = action.payload;
        },
        //Change activeIndex
        changeActiveIndex(state, action) {
            state.activeIndex = action.payload;
        },
        addCart(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id);
            if (item) {
                item.count += 1;
            } else {
                state.cartList.push({ ...action.payload, count: 1 });
            }
        },
    }
})

//asynchronous get data
const{ setFoodsList, changeActiveIndex, addCart } = foodsStore.actions;
const fetchFoodsList = () => {
    return async (dispatch) => {
    //editing async logioc
    const res = await axios.get('http://localhost:3004/takeaway');
    dispatch(setFoodsList(res.data));
    }
}

export { fetchFoodsList, changeActiveIndex, addCart }

const reducer = foodsStore.reducer;

export default reducer;