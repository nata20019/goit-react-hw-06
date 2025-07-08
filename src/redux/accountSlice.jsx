// import { createAction, createReducer } from "@reduxjs/toolkit";

// export const deposit = createAction('account/deposit')
// export const withdraw = createAction('account/withdraw')

// const initialState = {
//         balance: 800,
//         username: 'Jacob',
//     };

//     export const accountReducer = createReducer(initialState, builder => {
//         builder
//         .addCase('account/deposit', (state, action) => {
//             state.balance += action.payload;
//             })
//         .addCase('account/withdraw', (state, action) => {
//             state.balance -= action.payload;
//         })
//     })

import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice( {
    name: 'account',
    initialState: {
         balance: 800,
        username: 'Jacob',
    },
    reducers: {
        deposit(state, action) {
            state.balance += action.payload;
        },
        withdraw(state, action) {
            state.balance -= action.payload;
        },
    },
});

export const accountReducer = accountSlice.reducer;

export const {deposit, withdraw} = accountSlice.actions;