import "./playlist.scss"
import TrackList from "../trackList/trackList";

const Playlist = (props) => {
    return (
        <div className="playlist">
            <input className="playlist__input" defaultValue="New Playlist" />
            <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true}/>
            <button className="playlist__save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;