import React, { useState } from 'react'
import { Alert, Button, Card, CardText } from 'react-bootstrap'
import './ShoppingItemCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken, faStar } from '@fortawesome/free-solid-svg-icons'
import FavouriteIcons from './FavouriteIcons'
import AlertComponent from './Alert'
import store, { RootState } from '../Store/store'
import { addItem, cartItemsType, increaseQuantity } from '../Store/reducers'
import { useSelector } from 'react-redux'

interface Props {
  id: number,
  title: string,
  price: number,
  thumbnail: string,
  brand: string,
  rating?: number
}

const ShoppingItemCard = (props: Props) => {

    const [show, setShow] = useState<boolean>(false)

    const items = useSelector((store:RootState) => store.cart.cartItems)

    const handleClick = () => {
        
        setShow(true)
        setTimeout(
            () => {setShow(false)},1000
        )
        // console.log(items)
        if(items.length !== 0){
            const isIdPresent = items.some((item) => item.id === props.id)
            if(isIdPresent){
                store.dispatch(increaseQuantity(props.id))
            }
            else{
                store.dispatch(addItem({id:props.id,title:props.title,price:props.price,thumbnail:props.thumbnail,brand:props.brand,quantity:1}))
            }
        }
        else{
            // console.log('new item added')
            store.dispatch(addItem({id:props.id,title:props.title,price:props.price,thumbnail:props.thumbnail,brand:props.brand,quantity:1}))
        }
        
        
        // console.log(store.getState())
        // store.dispatch(addItem({id:props.id,title:props.title,price:props.price,thumbnail:props.thumbnail,brand:props.brand}))
        // console.log(items)
    }

  return (
    
    <div>
    <AlertComponent show={show} />
    <Card className='cardCustom'>

              <div className="cardUpper">
                  <Card.Img className='cardImgCustom' variant="top" src={props.thumbnail} alt='Image not found' />
                  <div className="overlayButtons">
                      <Button variant='outline-dark' onClick={() => handleClick()}>Add to Cart</Button>
                      <Button variant='outline-dark'>Buy Now</Button>
                  </div>
                  <FavouriteIcons brand={props.brand} id={props.id} price={props.price} rating={props.rating} thumbnail={props.thumbnail} title={props.title}  />
              </div>


              <Card.Body className='cardbodyCustom'>
                  <div className="subtitle">
                      <div className="brand">
                          <Card.Subtitle className='subtitleCustom'>{(props.brand) && props.brand.toUpperCase()}</Card.Subtitle>
                      </div>
                      <div className='rating'>
                          <Card.Subtitle className='ratingCustom'>Rating:{props.rating}</Card.Subtitle>
                          <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", width: '13px', height: '13px', marginLeft: '1px' }} />
                      </div>
                  </div>


                  <Card.Title className='cardtitleCustom'>{(props.title) && props.title.toUpperCase()}</Card.Title>
                  <CardText className='cardtextCustom' style={{ fontFamily: 'Manrope' }}>${props.price}</CardText>
              </Card.Body>
          </Card>
          </div>


  )
}

export default ShoppingItemCard