import "./playlist.scss"

const Playlist = () => {
    return (
        <div className="playlist">
            <input className="playlist__input" value="New Playlist" />
            <button className="playlist__save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;