import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tracks as TracksData, MergedTracks, NewReleases as NewReleasesData } from "../../types/types";

export const tracksSlice = createSlice({
    name: "tracks",
    initialState: {
        selectedTracksUri: {
            value: [] as string[]
        },
        mergedTracksSearch: {
            value: [] as MergedTracks[]
        },
        selectedTracks: {
            value: [] as MergedTracks[]
        },
        searchForItemsTracksData: {
            value: [] as TracksData[]
        },
        newReleasesData: {
            value: [] as NewReleasesData[]
        },
        newReleasesTracksData: {
            value: [] as TracksData[]
        },
        mergedTracksNewReleases: {
            value: [] as MergedTracks[]
        }
    },
    reducers: {
        setSelectedTracksUri: (state, action: PayloadAction<string>) => {
            state.selectedTracksUri.value = [...state.selectedTracksUri.value, action.payload];
        },
        removeSelectedTracksUri: (state, action: PayloadAction<string>) => {
            state.selectedTracksUri.value = state.selectedTracksUri.value.filter(
                (track) => track !== action.payload
            );
        },
        setMergedTracksSearch: (state, action: PayloadAction<MergedTracks[]>) => {
            state.mergedTracksSearch.value = action.payload;
        },
        setSelectedTracks: (state, action: PayloadAction<MergedTracks[]>) => {
            state.selectedTracks.value = action.payload;
        },
        removeSelectedTracks: (state, action: PayloadAction<MergedTracks>) => {
            state.selectedTracks.value = state.selectedTracks.value.filter(
                (track) => track.uri !== action.payload.uri
            );
        },
        setSearchForItemTracksData: (state, action: PayloadAction<TracksData[]>) => {
            state.searchForItemsTracksData.value = action.payload;
        },
        setNewReleasesData: (state, action: PayloadAction<NewReleasesData[]>) => {
            state.newReleasesData.value = action.payload;
        },
        setNewReleasesTracksData: (state, action: PayloadAction<TracksData[]>) => {
            state.newReleasesTracksData.value = action.payload;
        },
        setMergedTracksNewReleases: (state, action: PayloadAction<MergedTracks[]>) => {
            state.mergedTracksNewReleases.value = action.payload;
        }
    }
})

export const {
    setSelectedTracksUri,
    removeSelectedTracksUri,
    setMergedTracksSearch,
    setSelectedTracks,
    setSearchForItemTracksData,
    setNewReleasesData,
    setNewReleasesTracksData,
    removeSelectedTracks,
    setMergedTracksNewReleases } = tracksSlice.actions;

export default tracksSlice.reducer;

