import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

test('should show title', () => {
    render(
        <Provider store={store}><Home /></Provider>
    )

    const heading = screen.getByText("New Releases");
    expect(heading).toBeInTheDocument();

});