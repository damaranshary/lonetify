import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import TracksContainer from '../components/Tracks/container';
import { tracksData } from '../data/tracksData';

test('should show track card', () => {
    const { name, artists, album } = tracksData;

    render(
        <Provider store={store}>
            <TracksContainer
                track={tracksData}
                handleSelectTrack={() => true} />
        </Provider >);

    const selectButton = screen.getByRole('button', { name: 'Select' });
    expect(selectButton).toBeInTheDocument();

    const title = screen.getByText(name);
    expect(title).toBeInTheDocument();

    const artistsName = screen.getByText(artists.map(artist => artist.name).join(', '));
    expect(artistsName).toBeInTheDocument();

    const albumName = screen.getByText(album.name);
    expect(albumName).toBeInTheDocument();

    const imageTracks = screen.getByAltText(album.name);
    expect(imageTracks).toBeInTheDocument();

    userEvent.click(selectButton);
    expect(selectButton).toHaveTextContent('Select');

});