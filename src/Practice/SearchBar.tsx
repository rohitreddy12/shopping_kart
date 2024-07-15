import React, { useEffect, useState } from 'react'
import useDebounce from './useDebounce'

interface dataArr {
    firstName: string,
    lastName: string
}
const SearchBar = () => {
    const [value, setValue] = useState("")
    const [data, setData] = useState<dataArr[]>([])
    const [suggestions, setSuggestions] = useState([''])
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
    }
    // let debouncedValue = useDebounce(value, 500)

    const fetchData = () => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => setData(data.users))
    }

    const suggestFunc = (search: string) => {
        let updatedSuggestions = ['']
        setSuggestions([''])
        data.map((item) => {
            if (item.firstName.toLowerCase().includes(search.toLowerCase()) || item.lastName.toLowerCase().includes(search.toLowerCase())) {
                updatedSuggestions.push(item.firstName + " " + item.lastName)
                setSuggestions(updatedSuggestions)               
            }
        })
    }
    useEffect(() => {
        suggestFunc(value)
    }, [value])

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div style={{margin:'auto',width:'100px'}}>
                <input type="text"
                    onChange={handleChange} />
            </div>
            <div style={{textAlign:'center'}}>
                {   
                    (value.length === 0) ?
                    data.map((item) => 
                        <div>{item.firstName + " " + item.lastName}</div>
                    ) :
                    suggestions.map((item) => 
                        <div>{item}</div>    
                    )
                }
            </div>
        </>
    )
}

export default SearchBar 