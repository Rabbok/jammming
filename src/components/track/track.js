import './track.scss'

const Track = ({track}) => {
    return (
        <div className="track">
            <div className="track__information">
                <h3 className="track__caption">{track.name}</h3>
                <p className="track__paragraph">{track.artist} | {track.album}</p>
            </div>
            {/* <button className="track__action">{isRemoval ? "-" : "+"}</button> */}
        </div>
    )
}

export default Track;