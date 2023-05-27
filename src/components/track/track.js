import './track.scss'

const Track = (props) => {
    const addTrack = () => {
        props.onAdd(props.track)
    };

    const removeTrack = () => {
        props.onRemove(props.track)
    }

    return (
        <div className="track">
            <div className="track__information">
                <h3 className="track__caption">{props.track.name}</h3>
                <p className="track__paragraph">{props.track.artist} | {props.track.album}</p>
            </div>
            <button className="track__action" onClick={props.isRemoval ? removeTrack : addTrack}>{props.isRemoval ? "-" : "+"}</button>
        </div>
    )
}

export default Track;