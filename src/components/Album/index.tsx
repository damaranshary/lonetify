import { NewReleases } from "../../types/types";
import TracksContainer from "./container";

export type AlbumProps = {
  newReleaseAlbum : NewReleases[];
  handleGetNewReleasesTracks: (id: string) => void;
}

const Albums = ({ newReleaseAlbum, handleGetNewReleasesTracks }: AlbumProps) => {
  return <div className="grid-container">
    {newReleaseAlbum.map((album) => {
      const { name, artists, uri, id, images, release_date  } = album;
      return (
        <TracksContainer
          key={id}
          imgSrc={images[1].url}
          name={name}
          artists={artists}
          uri={uri}
          id={id}
          releaseDate={release_date}
          handleGetNewReleasesTracks={handleGetNewReleasesTracks}
        />
      )
    })}</div>
}

export default Albums;