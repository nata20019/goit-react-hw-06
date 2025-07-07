// export const deposit = value => {
//     return {
//         type: 'account/deposit',
//         payload: value,
//     };
// };

import { createAction, createReducer } from "@reduxjs/toolkit";

export const deposit = createAction('account/deposit')
export const withdraw = createAction('account/withdraw')

const initialState = {
        balance: 800,
        username: 'Jacob',
    };

    export const accountReducer = createReducer(initialState, builder => {
        builder
        .addCase('account/deposit', (state, action) => {
            state.balance += action.payload;
            })
        .addCase('account/withdraw', (state, action) => {
            state.balance -= action.payload;
        })
    })
// export const accountReducer = (state = accountInitialState, action) => {
// switch(action.type) {
//     case 'account/deposit':
//         return {
//                 ...state,
//                 balance: state.balance + action.payload,
//         }
//         case 'account/withdraw':
//             return {
//                  ...state,
//                     balance: state.balance - action.payload,
//             }
//             default:
//                 return state;
//         }
//     };