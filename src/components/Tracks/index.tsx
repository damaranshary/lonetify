import { TracksProps } from "../../types/types";
import TracksContainer from "./container";

const Tracks = ({ mergedTracks, handleSelectTrack }: TracksProps) => {
  return <div className="grid-container">
    {mergedTracks.map((track) => {
      return (
        <TracksContainer
          key={track.id}
          handleSelectTrack={handleSelectTrack}
          track={track}
        />
      )
    })}</div>
}

export default Tracks;