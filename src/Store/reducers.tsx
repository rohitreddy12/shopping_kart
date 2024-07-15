import { combineSlices, createAction, createSlice } from '@reduxjs/toolkit'
import React from 'react'

export interface cartItemsType{
    id:number,
    price:number,
    thumbnail:string,
    title:string,
    brand:string,
    quantity:number
}

interface initialStateType{
    cartItems:cartItemsType[],
    numberofItems:number
}

const initialcartState:initialStateType = {
    cartItems:[],
    numberofItems:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialcartState,
    reducers:{
        addItem: (state,action) => {
            // state.cartItems.push(action.payload)
            const updatedItems = state.cartItems
            updatedItems.push(action.payload)
            state.cartItems=updatedItems
            state.numberofItems = state.cartItems.length
        },
        deleteItem: (state,action) => {
            const updatedCart = state.cartItems
            updatedCart.map((item) => {
                if(item.id === action.payload){
                    const index = updatedCart.indexOf(item)
                    updatedCart.splice(index,1)
                }
            state.cartItems = updatedCart
            state.numberofItems = state.cartItems.length   
            } )
        },
        increaseQuantity: (state,action) => {
            state.cartItems.map((item) => {
                if(item.id === action.payload){
                    item.quantity++
                }
            }
            )
        },
        decreaseQuantity: (state,action) => {
            state.cartItems.map((item) => {
                if(item.id === action.payload){
                    item.quantity--
                }
            })
        }

    }
    })


interface initialfavStateType{
    favItems:cartItemsType[]
}

const initialfavState:initialfavStateType = {
    favItems:[]
}

const favSlice = createSlice({
    name:'favourites',
    initialState:initialfavState,
    reducers:{
        addFavourite:(state,action) => {
            const updatedFav = state.favItems
            updatedFav.push(action.payload)
            state.favItems = updatedFav
        },
        removeFavourite: (state,action) => {
            state.favItems.map((item,index) => {
                if(item.id === action.payload){
                    state.favItems.splice(index,1)
                }
            })
        }
    }
})

export const {addItem,deleteItem,increaseQuantity,decreaseQuantity} = cartSlice.actions
export const {addFavourite,removeFavourite} = favSlice.actions


export const cartReducer =  cartSlice.reducer
export const favReducer = favSlice.reducer

