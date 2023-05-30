import "./playlist.scss"
import TrackList from "../trackList/trackList";

const Playlist = (props) => {
    const handleNameChange = (event) => {
        const newName = event.target.value;
        props.onNameChange(newName);
    }

    return (
        <div className="playlist">
            <input className="playlist__input" defaultValue="New Playlist" onChange={handleNameChange}/>
            <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true}/>
            <button className="playlist__save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;