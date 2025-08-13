// editing store
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"; 

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        //goodslist
        foodsList: []
    },
    reducers :{
        setFoodsList(state, action){
            state.foodsList = action.payload;
        }
    }
})

//asynchronous get data
const{ setFoodsList } = foodsStore.actions;
const fetchFoodsList = () => {
    return async (dispatch) => {
    //editing async logioc
    const res = await axios.get('http://localhost:3004/takeaway');
    dispatch(setFoodsList(res.data));
    }
}

export { fetchFoodsList }

const reducer = foodsStore.reducer;

export default reducer;