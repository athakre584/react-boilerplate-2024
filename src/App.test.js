import { render } from '@testing-library/react';
import App from './App';  // Import the App component

// Test Case
describe('App Component', () => {
  it('should render BoilerplatePage component', () => {
    const { container } = render(<App />); // Render the App component
    const boilerplatePage = container.querySelector('.app'); // Find an element in the BoilerplatePage component

    // Check if the BoilerplatePage component has loaded
    expect(boilerplatePage).toBeInTheDocument();
  });
});