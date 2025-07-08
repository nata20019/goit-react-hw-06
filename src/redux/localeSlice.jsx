// import { createAction, createReducer } from "@reduxjs/toolkit";

// export const changeLang = createAction('locale/changeLang');

// const initialState = {
//        lang: 'en',
//     }

//  export const localeReducer = createReducer(initialState, builder => {
//     builder.addCase('locale/changeLang', (state, action) => 
//                 {
//             state.lang = action.payload;
//                     })
//                 })

import { createAction, createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
    name: 'locale',
    initialState: {
       lang: 'en',
    }, 
    reducers: {
changeLang(state, action) {
    state.lang = action.payload;
}
},
});

export const changeLang = createAction('locale/changeLang');

export const localeReducer = localeSlice.reducer;