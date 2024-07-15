import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import store, { RootState } from '../Store/store'

import './Cart.css'
import { decreaseQuantity, deleteItem, increaseQuantity } from '../Store/reducers'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cart = () => {

    const items = useSelector((store: RootState) => store.cart.cartItems)

    const handlingCharges = 10
    const handleIncrement = (id: number) => {
        store.dispatch(increaseQuantity(id))
    }

    const handleDecrement = (id: number) => {
        items.map((item) => {
            if (item.id === id) {
                if (item.quantity > 1) {
                    store.dispatch(decreaseQuantity(id))
                }
                else {
                    store.dispatch(deleteItem(id))
                }
            }
        })

    }
    const totalPrice = () => {
        let sum = 0;
        items.map((item) => {
            sum = sum + (item.price * item.quantity)
        })
        return sum;
    }
    const handleClear = (id: number) => {
        store.dispatch(deleteItem(id))
    }

    useEffect(
        () => {
            // console.log(items)
            totalPrice()
        }, [items]
    )

    return (
        <div className="main">
            <div className='cartTitle'>Your Cart</div>
            
            {
            (items.length !== 0) ?
            
            <div className="cartBody">
                <table id='cartTable'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    {
                        items.map((item: any) =>
                            <tbody>
                                <tr style={{ height: '10px' }}>
                                    <td id='itemData'>
                                        <img style={{ margin: '10px' }} src={item.thumbnail} alt="Img is Unavailable" />
                                        <div className="titleandbrand">
                                            <div style={{ fontSize: '15px', fontWeight: 'bold' }} >{item.title}</div>
                                            <div style={{ fontSize: '10px' }}>{item.brand}</div>
                                        </div>

                                    </td>
                                    <td>${item.price}</td>
                                    <td><button onClick={() => { handleDecrement(item.id) }}>-</button>{item.quantity}<button onClick={() => { handleIncrement(item.id) }}>+</button></td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td><button onClick={() => handleClear(item.id)}>x</button></td>


                                </tr>
                            </tbody>
                        )
                    }
                </table>
                <div className='priceContainer'>
                
                    <div className="totalPrice">
                        <div>Subtotal: ${totalPrice().toFixed(2)}</div>
                        <div>Handling Charges: ${handlingCharges}</div>
                        <div>Grand Total: ${(totalPrice() + handlingCharges).toFixed(2)}</div>
                        <Button>Checkout</Button>
                        <p>*shipping charges will be added after the address is entered</p>
                    </div>
                    
                </div>
            </div> :
            <div className='emptyCart'>
                Your cart is Empty 
                <Link to={'/'} ><Button className='customBtn'>Keep Shopping</Button></Link>
            </div>
            }
        </div>
                
    )
}

export default Cart