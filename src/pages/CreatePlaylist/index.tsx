import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import PlaylistForm from '../../components/PlaylistForm';
import { addPlaylistData, addItemToPlaylist } from '../../api-call/fetchSpotifyAPI';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { removeSelectedTracksUri, removeSelectedTracks } from '../../redux/slices/tracksSlice';
import Tracks from '../../components/Tracks';
import { MergedTracks } from '../../types/types';

const CreatePlaylist = () => {
    const selectedTracksUri = useAppSelector((state: RootState) => state.tracks.selectedTracksUri.value);
    const accessToken = useAppSelector((state: RootState) => state.accessToken.value);
    const userID = useAppSelector((state: RootState) => state.user.userID);
    const mergedTracksSearch = useAppSelector((state: RootState) => state.tracks.mergedTracksSearch.value);
    const selectedTracks = useAppSelector((state: RootState) => state.tracks.selectedTracks.value);
    const dispatch = useDispatch();
    const [playlistData, setPlaylistData] = useState({
        title: '',
        description: '',
    })
    const itemParams = {
        uris: selectedTracksUri
    }

    useEffect(() => {
        document.title = 'Create Playlist';
    })

    const handleAddPlaylistOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPlaylistData({ ...playlistData, title: e.target.value });
    }

    const handleAddPlaylistOnChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPlaylistData({ ...playlistData, description: e.target.value });
    }

    const handleAddPlaylistOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        accessToken !== undefined && addPlaylistData(accessToken, userID, playlistData)
            .then(res => {
                console.log("Playlist created: ", res);
                selectedTracksUri.length > 0 && (handleAddItemToPlaylist(res.id));
                alert(`${res.name} Playlist created!`);
            })
    }

    const handleSelectTrack = (track: MergedTracks) => {
        dispatch(removeSelectedTracksUri(track.uri));
        dispatch(removeSelectedTracks(track));
    };

    const handleAddItemToPlaylist = (playlist_id: string) => {
        accessToken !== undefined && addItemToPlaylist(accessToken, playlist_id, itemParams)
            .then(res => {
                console.log("Added items to playlist: ", res);
            });
    }

    return (
        <div className="create-playlist">
            <div className="heading">
                <h2>Create Playlist</h2>
            </div>
            <PlaylistForm
                handleAddPlaylistOnChangeInput={handleAddPlaylistOnChangeInput}
                handleAddPlaylistOnChangeTextArea={handleAddPlaylistOnChangeTextArea}
                handleAddPlaylistOnSubmit={handleAddPlaylistOnSubmit}
                playlistData={playlistData} />
            <h3>Selected Tracks</h3>
            {mergedTracksSearch.length > 0 ? (
                <Tracks
                    mergedTracks={selectedTracks}
                    handleSelectTrack={handleSelectTrack} />
            ) : (<p> No tracks found </p>)};
        </div>
    )
}

export default CreatePlaylist;