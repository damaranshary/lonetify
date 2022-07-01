import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBar from '../components/SearchBar';

test('should show input and update value when inputted', () => {
    var query = 'test';
    render(<SearchBar
        onChange={(e) => query = e.target.value}
        onSubmit={(e) => e.preventDefault()} />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'test');
    expect(input).toHaveValue('test');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(button).toHaveTextContent('Search');

    expect(query).toBe('test');

});