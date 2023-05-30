import { useState } from 'react'
import './searchBar.scss'

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const search = () => {
        props.onSearch(term)
    }
    
    const handleTermChange = (event) => {
        const newTerm = event.target.value;
        setTerm(newTerm);
    }

    return (
        <div className="search-bar">
            <input className="search-bar__input" placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}/>
            <button className="search-bar__button" onClick={search}>SEARCH</button>
        </div>
    )
}

export default SearchBar;