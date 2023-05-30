import './App.scss';
import { useState } from 'react';
import SearchBar from '../searchBar/searchBar';
import SearchResults from '../searchResults/searchResults';
import Playlist from '../playlist/playlist';
import Spotify from '../../util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('name');
  const [playlistTracks, setPlaylistTracks] = useState([]);

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

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.URI);
    console.log(trackUris)
    console.log(playlistTracks)
    Spotify.savePlaylist(playlistName, trackUris);
    setPlaylistName('New Playlist');
  }

  async function search (term) {
    const results = await Spotify.search(term);
    setSearchResults(results);
  }

  return (
    <div>
      <h1 className='caption'>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="app">
        <SearchBar onSearch={search}/>
        <div className="app-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
