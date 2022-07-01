import { Link } from 'react-router-dom';
import Profile from '../../pages/Profile';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-profile">
                <Profile />
            </div>
            <ul className="navbar-list">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/create-playlist">Create Playlist</Link></li>
            </ul>
            <div className="navbar-logo">
                <span><img className="spotify-logo" src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png'alt="lonetify logo"></img></span>
            </div>
        </div>
    )
}

export default Navbar;
