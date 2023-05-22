import './App.scss';
import SearchBar from '../searchBar/searchBar';
import SearchResults from '../searchResults/searchResults';
import Playlist from '../playlist/playlist';

function App() {
  return (
    <div>
      <h1 className='caption'>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="app">
        <SearchBar/>
        <div className="app-playlist">
          <SearchResults/>
          <Playlist/>
        </div>
      </div>
    </div>
  );
}

export default App;
