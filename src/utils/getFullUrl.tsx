export const getfullURI = () : string => {
    const clientID = process.env.REACT_APP_SPOTIFY_KEY as string;
    const redirectURI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI || process.env.REACT_APP_VERCEL_URL as string;
    const scope = 'playlist-modify-private';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientID);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirectURI);

    return url;
}