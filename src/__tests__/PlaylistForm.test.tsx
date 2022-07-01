import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PlaylistForm from '../components/PlaylistForm';


test('should show input and textarea, and update value when inputted', () => {
    const playlistData = {
        title: 'test',
        description: 'test',
    }

    render(<PlaylistForm
        handleAddPlaylistOnChangeInput={(e) => e.target.value}
        handleAddPlaylistOnChangeTextArea={(e) => e.target.value}
        handleAddPlaylistOnSubmit={(e) => e.preventDefault()}
        playlistData={playlistData} />);

    const input = screen.getByRole('textbox', { name: 'Title' });
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'test');
    expect(input).toHaveValue('test');

    const textarea = screen.getByRole('textbox', { name: 'Description' });
    expect(textarea).toBeInTheDocument();

    userEvent.type(textarea, 'test');
    expect(textarea).toHaveValue('test');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(button).toHaveTextContent('Submit');

});