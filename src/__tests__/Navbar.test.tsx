import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as  Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { store } from '../redux/store';

test('should show title when click cta', () => {
    render(<Provider store={store}><Router> <Navbar /></Router></Provider>);

    const search = screen.getByText('Search');
    expect(search).toBeInTheDocument();

    userEvent.click(search);
    expect(search).toHaveTextContent('Search');

    const home = screen.getByText('Home');
    expect(home).toBeInTheDocument();

    userEvent.click(home);
    expect(home).toHaveTextContent('Home');

    const createPlaylist = screen.getByText('Create Playlist');
    expect(createPlaylist).toBeInTheDocument();

    userEvent.click(createPlaylist);
    expect(createPlaylist).toHaveTextContent('Create Playlist');

});

