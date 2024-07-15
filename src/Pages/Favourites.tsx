import React, { useState } from 'react'
import { Button, Card, CardText } from 'react-bootstrap'
import FavouriteIcons from '../Components/FavouriteIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import store, { RootState } from '../Store/store'
import { addItem, increaseQuantity } from '../Store/reducers'
import AlertComponent from '../Components/Alert'
import { createSelector } from '@reduxjs/toolkit'
import ShoppingItemCard from '../Components/ShoppingItemCard'
import './favourites.css'

const Favourites = () => {

    const inputSelector  = (store:RootState) => store.favourites.favItems

    const favourites = useSelector(inputSelector)

    return(
        <div className='favourites'>
            {
                favourites.map((item) => 
                    <ShoppingItemCard brand={item.brand} id={item.id} price={item.price} thumbnail={item.thumbnail} title={item.title} key={item.id} />
                )
            }
        </div>
    )
}

export default Favourites