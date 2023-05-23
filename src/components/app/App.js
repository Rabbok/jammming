import './App.scss';
import { useState } from 'react';
import SearchBar from '../searchBar/searchBar';
import SearchResults from '../searchResults/searchResults';
import Playlist from '../playlist/playlist';

function App() {
  const { searchResults, setEearchResults } = useState([]);
  const { playlistName, setPlaylistName } = useState('name');
  const { playlistTracks, setPlaylistTracks } = useState([{name: '', artist: '', album: ''}, {name: '', artist: '', album: ''}]);

  return (
    <div>
      <h1 className='caption'>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="app">
        <SearchBar/>
        <div className="app-playlist">
          <SearchResults searchResults={searchResults}/>
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
