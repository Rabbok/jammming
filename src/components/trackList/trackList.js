import './trackList.scss';
import Track from '../track/track';

const TrackList = ({tracks}) => {
    return (
        <div className="track-list">
            {tracks ? tracks.map((track, index) => {
                return <Track track={track} key={index} />
            }) : null
        }
        </div>
    )
}

export default TrackList;