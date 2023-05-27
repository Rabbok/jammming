import './trackList.scss';
import Track from '../track/track';

const TrackList = (props) => {
    return (
        <div className="track-list">
            {props.tracks ? props.tracks.map((track, index) => {
                return <Track key={index} track={track} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval}/>
            }) : null
        }
        </div>
    )
}

export default TrackList;