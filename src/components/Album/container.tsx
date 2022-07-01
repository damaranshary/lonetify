import { Artist } from "../../types/types";

export type AlbumContainerProps = {
    imgSrc: string
    name: string
    artists: Artist[]
    uri: string
    id: string
    releaseDate: string
    handleGetNewReleasesTracks: (id: string) => void
}

const AlbumContainer = ({ imgSrc, name, artists, id, releaseDate, handleGetNewReleasesTracks}: AlbumContainerProps) => {
    return (
        <div className="grid-item" key={id} data-testid={`id ${id}`}>
            <div className="img-container">
                <img src={imgSrc} alt={name} className="img album" />
            </div>
            <div className="description">
                <p className="title"> {name}</p>
                <p className="artists">{artists.map(artist => artist.name).join(', ')}</p>
                <p className="release-date">Date Added: {releaseDate}</p>
                <button className="btn unselected" onClick={() => handleGetNewReleasesTracks(id)}>Learn More</button>
            </div>
        </div>
    )
}

export default AlbumContainer;
