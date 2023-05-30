import "./searchResults.scss";
import TrackList from "../trackList/trackList";

const SearchResults = (props) => {
    return (
        <div className="search-results">
            <h2 className="second-caption">Results</h2>
            <TrackList tracks={props.searchResults} onAdd={props.onAdd} isRemoval={false} />
        </div>
    )
}

export default SearchResults;