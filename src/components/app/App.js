import './App.scss';
import { useState } from 'react';
import SearchBar from '../searchBar/searchBar';
import SearchResults from '../searchResults/searchResults';
import Playlist from '../playlist/playlist';

function App() {
  const [searchResults, setEearchResults] = useState([{name: 'Name1', artist: 'artist1', album: 'album1'}, {name: 'Name2', artist: 'artist2', album: 'album2'}]);
  const [playlistName, setPlaylistName] = useState('name');
  const [playlistTracks, setPlaylistTracks] = useState([{name: 'Name', artist: 'artist', album: 'album'}, {name: 'Name', artist: 'artist', album: 'album'}]);

  const addTrack = (track) => {
    const isTrackExists = playlistTracks.some(savedTrack => (
      savedTrack.name === track.name &&
      savedTrack.artist === track.artist &&
      savedTrack.album === track.album
    ));
    if (isTrackExists) {
      return;
    }
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  }

  const removeTrack = (track) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(savedTrack => (
      savedTrack.name !== track.name ||
      savedTrack.artist !== track.artist ||
      savedTrack.album !== track.album
    )));
  }

  return (
    <div>
      <h1 className='caption'>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="app">
        <SearchBar/>
        <div className="app-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack}/>
        </div>
      </div>
    </div>
  );
}

export default App;
