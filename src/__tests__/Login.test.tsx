import { render, screen } from '@testing-library/react';

import Login from '../components/Login';

test('should show a button and a h1', () => {
    render(<Login
    />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    
});