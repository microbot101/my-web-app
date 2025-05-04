import React, {useState} from "react";
import './SearchBar.css'

const products = [
    'tooth paste', 
    'tooth brush',
    'mouth wash',
    'dental floss',
    'mouth guard'
]

const SearchBar = () =>{
    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue ('')
    }

    const shouldDisplayButton = searchValue.length > 0

    return <div>
        <input type="text" placeholder="input text" value={searchValue} onChange={handleInputChange}/>
         
         {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
        


    </div>
}

export default SearchBar