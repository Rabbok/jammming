import "./playlist.scss"
import TrackList from "../trackList/trackList";

const Playlist = ({playlistName, playlistTracks}) => {
    return (
        <div className="playlist">
            <input className="playlist__input" value="New Playlist" />
            <TrackList tracks={playlistTracks}/>
            <button className="playlist__save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;