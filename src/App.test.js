import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

// Mock the AppRoutes component to simplify testing
jest.mock('./routes', () => {
  const MockedRoutes = () => <div>Mocked App Routes</div>;
  MockedRoutes.displayName = 'MockedRoutes'; // Add display name
  return MockedRoutes;
});

describe('App Component', () => {
  test('renders App component without crashing', () => {
    render(<App />);

    // Check if the mocked routes are rendered
    expect(screen.getByText('Mocked App Routes')).toBeInTheDocument();
  });
});
