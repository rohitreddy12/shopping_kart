import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import ShoppingItemCard from '../Components/ShoppingItemCard'
import './ShoppingItems.css'

interface Items{
    id:number,
    title:string,
    price:number,
    thumbnail:string,
    brand:string,
    rating:number
}

const ShoppingItems = () => {

    const [items, setItems] = useState<Items[]>([])

    const getItems = () => {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            const fetchedItems = data.products.map((item:Items) => ({
                id:item.id,
                title:item.title,
                price:item.price,
                thumbnail:item.thumbnail,
                brand:item.brand,
                rating:item.rating
            }))
            setItems(fetchedItems)
        })
            
    }

    useEffect(() => {
      getItems()  
    }, [])
    

  return (
    <div className='itemsPage'>
        {
            items.map((item) => 
                <div className='shoppingItem'>
                    <ShoppingItemCard id={item.id} price={item.price} thumbnail={item.thumbnail} title={item.title} key={item.id} brand={item.brand} rating={item.rating}/>
                </div>
            )
        }
    </div>
  )
}

export default ShoppingItems