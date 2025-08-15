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
    },
    reducers :{
        setFoodsList(state, action){
            state.foodsList = action.payload;
        },
        //Change activeIndex
        changeActiveIndex(state, action) {
            state.activeIndex = action.payload;
        }
    }
})

//asynchronous get data
const{ setFoodsList, changeActiveIndex } = foodsStore.actions;
const fetchFoodsList = () => {
    return async (dispatch) => {
    //editing async logioc
    const res = await axios.get('http://localhost:3004/takeaway');
    dispatch(setFoodsList(res.data));
    }
}

export { fetchFoodsList, changeActiveIndex }

const reducer = foodsStore.reducer;

export default reducer;