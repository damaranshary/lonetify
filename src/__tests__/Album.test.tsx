import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AlbumContainer from '../components/Album/container';
import { newReleasesData } from '../data/newReleasesData';

test('should show title when click cta', () => {
    const { images, artists, id, release_date, name, uri } = newReleasesData[0];
    render(
        <AlbumContainer
            key={id}
            imgSrc={images[1].url}
            name={name}
            artists={artists}
            uri={uri}
            id={id}
            releaseDate={release_date}
            handleGetNewReleasesTracks={() => true} />
    );

    const title = screen.getByText(newReleasesData[0].name);
    expect(title).toBeInTheDocument();

    const image = screen.getByAltText(newReleasesData[0].name);
    expect(image).toBeInTheDocument();

    const cta = screen.getByRole('button', { name: 'Learn More' });
    expect(cta).toBeInTheDocument();

    userEvent.click(cta);
    expect(cta).toHaveTextContent('Learn More');

    const tracks = screen.getByTestId(/id .*/i);
    expect(tracks).toBeInTheDocument();
});