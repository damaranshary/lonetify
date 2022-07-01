import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { RootState } from "../../redux/store";
import {
    setSelectedTracksUri,
    removeSelectedTracksUri,
    setSearchForItemTracksData,
    setMergedTracksSearch,
    setSelectedTracks,
    removeSelectedTracks
} from "../../redux/slices/tracksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchSearchForItemTracksData } from "../../api-call/fetchSpotifyAPI";
import Tracks from "../../components/Tracks";
import SearchBar from "../../components/SearchBar";
import { MergedTracks } from "../../types/types";

const Search = () => {
    const [query, setQuery] = useState("");
    const searchForItemTracksData = useAppSelector((state: RootState) => state.tracks.searchForItemsTracksData.value);
    const mergedTracksSearch = useAppSelector((state: RootState) => state.tracks.mergedTracksSearch.value);
    const selectedTracksUri = useAppSelector((state: RootState) => state.tracks.selectedTracksUri.value);
    const accessToken = useAppSelector((state: RootState) => state.accessToken.value);
    const dispatch = useAppDispatch();
    const selectedTracks = useAppSelector((state: RootState) => state.tracks.selectedTracks.value);

    useEffect(() => {
        const mergedTracksWithTracksData
            = searchForItemTracksData.map((track) => ({
                ...track,
                isSelected: !!selectedTracksUri.includes(track.uri),
            }));
        searchForItemTracksData !== undefined && dispatch(setMergedTracksSearch(mergedTracksWithTracksData));
    }, [selectedTracksUri, searchForItemTracksData, dispatch]);

    useEffect(() => {
        document.title = 'Search';
    }, [])

    const handleSearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleGetTracksData = () => {
        accessToken !== undefined && fetchSearchForItemTracksData(query, accessToken)
            .then(res => {
                dispatch(setSearchForItemTracksData(res));
            });
    }

    const handleSearchOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        query !== undefined && handleGetTracksData();
    }

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
        <div className="search">
            <div className="heading">
                <h2>Search for Tracks</h2>
                <SearchBar
                    onSubmit={handleSearchOnSubmit}
                    onChange={handleSearchOnChange} />
            </div>
            {mergedTracksSearch.length > 0 ? (
                <Tracks
                    mergedTracks={mergedTracksSearch}
                    handleSelectTrack={handleSelectTrack} />
            ) : (<p> No tracks found xD </p>)};
        </div>
    )
}

export default Search;