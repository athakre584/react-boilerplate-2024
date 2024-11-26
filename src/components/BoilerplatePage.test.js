import { render, screen } from '@testing-library/react';
import BoilerplatePage from './BoilerplatePage';

// Test Case
describe('BoilerplatePage Component', () => {
  it('should render BoilerplatePage component inside App', () => {
    render(<BoilerplatePage />);

    // Check if BoilerplatePage content is rendered
    expect(screen.getByText(/React Boilerplate with CRA/i)).toBeInTheDocument();
    expect(screen.getByText(/A powerful, flexible, and efficient boilerplate for React development/i)).toBeInTheDocument();
  });

  it('should render the setup instructions', () => {
    render(<BoilerplatePage />);

    // Check for a specific section in BoilerplatePage
    expect(screen.getByText(/Setup Instructions/i)).toBeInTheDocument();
    expect(screen.getByText(/Clone the repository/i)).toBeInTheDocument();
  });

  it('should render commit rules section', () => {
    render(<BoilerplatePage />);

    // Check if commit rules are rendered
    expect(screen.getByText(/Commit Rules/i)).toBeInTheDocument();
    expect(screen.getByText(/Pre-commit:/i)).toBeInTheDocument();
  });

  // Optionally, check for other sections if required
});