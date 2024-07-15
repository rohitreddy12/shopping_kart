import React, { useContext, useEffect, useState } from 'react'
import { IoMdHeart } from 'react-icons/io'
import { MdFavoriteBorder } from 'react-icons/md'
import './FavouriteIcons.css'
import store, { RootState } from '../Store/store'
import { useSelector } from 'react-redux'
import { addFavourite, removeFavourite } from '../Store/reducers'
import { createSelector } from '@reduxjs/toolkit'



interface Props {
    id: number,
    title: string,
    price: number,
    thumbnail: string,
    brand: string,
    rating?: number
  }  

function FavouriteIcons(props:Props) {


    const inputSelector  = (store:RootState) => store.favourites.favItems

    const favoriteidsSelector = createSelector(inputSelector,(favItems) => favItems.map((item) => item.id))

    const favouriteIds = useSelector(favoriteidsSelector)
   
    const handleClick = (id: number) => {
        
            if(favouriteIds !== null && favouriteIds.includes(id))  
                {
                    store.dispatch(removeFavourite(id))
                }
            else{
                    store.dispatch(addFavourite({id:props.id,thumbnail:props.thumbnail,title:props.title,price:props.price,rating:props.rating,brand:props.brand}))
                }
            console.log(store.getState().favourites.favItems)
        }
        

        
    
    
    return (
        <div className="main">
            <div className="favourties">
                {                    
                    (favouriteIds.includes(props.id)) ?
                        
                        <div className='favIcon' ><button id={String(props.id)} onClick={() => handleClick(props.id)}><IoMdHeart /></button></div> :
                        <div className='favourite'><button id={String(props.id)} onClick={() => handleClick(props.id)}><MdFavoriteBorder style={{width:'20px',height:'20px'}} /></button></div>        
                }
            </div> 
        </div>
    )
}

export default FavouriteIcons