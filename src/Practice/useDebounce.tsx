import React, { useEffect, useState } from 'react'

const useDebounce = (value:string,delay:number) => {

    const [debouncedValue, setdebouncedValue] = useState('')
    useEffect(() => {
        
        let timer = setTimeout(() => {
            setdebouncedValue(value)
        }, delay);
    
      return () => {
        clearTimeout(timer)
      }
    }, [value])
    return debouncedValue
}

export default useDebounce