import axios from "axios"
import {
    ResponseTracks,
    ResponseUser,
    PlaylistParams,
    ResponsePlaylist,
    ItemParams,
    ResponseAddItemToPlaylist,
    ResponseNewReleasesTracks,
} from "../types/types"

export const fetchSearchForItemTracksData = async (query: string, accessToken: string): Promise<ResponseTracks> => {
    const data = await axios //get tracks data
        .get(
            `https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`
        )
        .catch((error) => error)
    return data.data.tracks.items;
}

export const fetchUserData = async (accessToken: string): Promise<ResponseUser> => {
    const data = await axios // get user data
        .get(
            `https://api.spotify.com/v1/me?access_token=${accessToken}`
        )
        .catch((error) => error)
    return data.data;
}

export const addPlaylistData = async (accessToken: string, userID: string, playlistData: PlaylistParams): Promise<ResponsePlaylist> => {
    const header = {
        Authorization: `Bearer ${accessToken}` // set access token in header
    }
    const bodyParams = { // body params for add playlist
        name: playlistData.title,
        description: playlistData.description,
        collaborative: false,
        public: false
    }
    const data = await axios //create playlist
        .post(
            `https://api.spotify.com/v1/users/${userID}/playlists`, bodyParams,
            {
                headers: header
            }
        )
        .catch((error) => error)
    return data.data;
}

export const addItemToPlaylist = async (accessToken: string, playlist_id: string, itemParams: ItemParams): Promise<ResponseAddItemToPlaylist> => {
    const header = {
        Authorization: `Bearer ${accessToken}` // set access token in header
    }

    const data = await axios //add items to playlist
        .post(
            `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, itemParams,
            {
                headers: header
            }
        )
        .catch((error) => error);
    return data;
}

export const fetchNewReleasesData = async (accessToken: string): Promise<ResponseNewReleasesTracks> => {
    const header = {
        Authorization: `Bearer ${accessToken}` // set access token in header
    }
    const data = await axios
        .get(
            `https://api.spotify.com/v1/browse/new-releases`,
            {
                headers: header
            }
        ).catch((error) => error)
    return data.data.albums.items;
}

export const fetchAlbumTracksFromNewReleases = async (accessToken: string, albumID: string): Promise<ResponseTracks> => {
    const header = {
        Authorization: `Bearer ${accessToken}` // set access token in header
    }
    const data = await axios
        .get(
            `https://api.spotify.com/v1/albums/${albumID}/tracks`,
            {
                headers: header
            }
        ).catch((error) => error)
    return data.data.items;
}