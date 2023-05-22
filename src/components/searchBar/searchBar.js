import './searchBar.scss'

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input className="search-bar__input" placeholder="Enter A Song, Album, or Artist" />
            <button className="search-bar__button">SEARCH</button>
        </div>
    )
}

export default SearchBar;