import React, { MouseEventHandler, useState } from 'react'
import './Dropdown.css'

const Dropdown = () => {
    const [showDropdown,setShowDropdown] = useState<'hidden' | 'visible'>("hidden")
    const [id,setId] = useState('')
    const handleClick = () => {
        if(showDropdown === 'hidden'){
            setShowDropdown('visible')
        }
        else{
            setShowDropdown('hidden')
        }
        
    }
    const handleElementClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
        setId(e.currentTarget.id)
    }
  return (
    <div className='dropdown' >
        <div><button className='dropdownButton' onClick={() => handleClick()}>Dropdown</button></div>
        <div className='dropdownElements' style={{visibility:showDropdown}}>
            <div><button id='1' onClick={handleElementClick}>Element 1</button></div>
            <div><button id='2' onClick={handleElementClick}>ELement 2</button></div>
            <div><button id='3' onClick={handleElementClick}>ELement 3</button></div>
        </div>    
        <div>
            Clicked Element {id}
        </div>
    </div>
  )
}

export default Dropdown