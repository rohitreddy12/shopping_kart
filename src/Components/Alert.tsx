import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import './Alert.css'

interface Props{
    show:boolean
}

const AlertComponent = (props:Props) => {
    

  return (
    <div className='alert'>
        <Alert show={props.show} key='success' variant='success'>
            Added To Cart!
        </Alert>
    </div>
  )
}

export default AlertComponent