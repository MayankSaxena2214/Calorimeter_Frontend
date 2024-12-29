import {createSlice} from "@reduxjs/toolkit"

const initialState={
    foods:[],
    totalFoods:[],
    totalKcal:0
}

const foodSlice=createSlice({
    name:'foods',
    initialState,
    reducers:{
        setFoods:(state,action)=>{
            const {foods,totalFoods}=action.payload;
            state.foods=foods;
            state.totalFoods=totalFoods;
            let calories=0;
            for(let i=0;i<foods.length;i++){
                calories+=foods[i].calories;
            }
            state.totalKcal=calories;
        }
    }
});

export const {setFoods}=foodSlice.actions;

export default foodSlice.reducer;