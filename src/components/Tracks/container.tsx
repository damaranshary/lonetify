import { MergedTracks } from "../../types/types";

export type TracksContainerProps = {
    handleSelectTrack: (track: MergedTracks) => void;
    track: MergedTracks;
}

const TracksContainer = ({ handleSelectTrack, track }: TracksContainerProps) => {
    const { album, name, artists, isSelected, id, duration_ms } = track;
    const convertDuration = new Date(duration_ms);
    const minutes = convertDuration.getMinutes();
    const seconds = convertDuration.getSeconds();
    const duration = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
    return (
        <div className="grid-item" key={id} data-testid={`id ${id}`}>
            <div role="img" className="img-container">
                <img src={album.images[1].url} alt={album.name} className="img album" />
            </div>
            <div className="description">
                <p className="title"> {name}</p>
                <p className="artists">{artists.map(artist => artist.name).join(', ')}</p>
                <p className="duration">{duration}</p>
                <button className={isSelected ? "btn selected" : "btn unselected"} onClick={() => handleSelectTrack(track)}> {isSelected ? 'Deselect' : 'Select'} </button>
            </div>
        </div>
    )
}

export default TracksContainer;
