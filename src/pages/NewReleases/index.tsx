import { useParams } from "react-router-dom";
import { fetchAlbumTracksFromNewReleases } from "../../api-call/fetchSpotifyAPI";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { 
    removeSelectedTracks, 
    removeSelectedTracksUri, 
    setMergedTracksNewReleases, 
    setNewReleasesTracksData, 
    setSelectedTracks, 
    setSelectedTracksUri } from "../../redux/slices/tracksSlice";
import { useEffect } from "react";
import { MergedTracks } from "../../types/types";
import Tracks from "../../components/Tracks";


const NewReleasesTracks = () => {
    const accessToken = useAppSelector((state: RootState) => state.accessToken.value);
    const selectedTracks = useAppSelector((state: RootState) => state.tracks.selectedTracks.value);
    const selectedTracksUri = useAppSelector((state: RootState) => state.tracks.selectedTracksUri.value);
    const mergedTracksNewReleases = useAppSelector((state: RootState) => state.tracks.mergedTracksNewReleases.value);
    const newReleasesTracksData = useAppSelector((state: RootState) => state.tracks.newReleasesTracksData.value);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const getNewReleasesTracksData = async () => {
        if (accessToken !== undefined && id !== undefined) (
            await fetchAlbumTracksFromNewReleases(accessToken, id).then(res => {
                dispatch(setNewReleasesTracksData(res));
            }));
    }

    useEffect(() => {
        const mergedTracksWithTracksData
            = newReleasesTracksData.map((track) => ({
                ...track,
                isSelected: !!selectedTracksUri.includes(track.uri),
            }));
        mergedTracksNewReleases !== undefined && dispatch(setMergedTracksNewReleases(mergedTracksWithTracksData));
    }, [selectedTracksUri, mergedTracksNewReleases, newReleasesTracksData, dispatch]);

    const handleAddSelectedTracks = (track: MergedTracks) => {
        dispatch(setSelectedTracksUri(track.uri));
        dispatch(setSelectedTracks([...selectedTracks, track]));
    }

    const handleRemoveSelectedTracks = (track: MergedTracks) => {
        dispatch(removeSelectedTracksUri(track.uri));
        dispatch(removeSelectedTracks(track));
    }

    const handleSelectTrack = (track: MergedTracks) => {
        const alreadySelected = selectedTracksUri.includes(track.uri);
        alreadySelected ?
            handleRemoveSelectedTracks(track) : handleAddSelectedTracks(track);
    };

    return (
        <div className="new-releases">
            <p>{id}</p>
            <button onClick={getNewReleasesTracksData} ></button>
            {newReleasesTracksData !== undefined &&
                <Tracks
                    mergedTracks={mergedTracksNewReleases}
                    handleSelectTrack={handleSelectTrack}
                />}
        </div>
    )
}

export default NewReleasesTracks;