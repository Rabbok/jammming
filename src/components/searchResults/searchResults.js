import "./searchResults.scss";
import TrackList from "../trackList/trackList";

const SearchResults = ({searchResults}) => {
    return (
        <div className="search-results">
            <h2 className="second-caption">Results</h2>
            <TrackList tracks={searchResults}/>
        </div>
    )
}

export default SearchResults;