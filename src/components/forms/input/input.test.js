import { render, screen } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import RHFInput from './input';
import React from 'react';

// Wrapper component to provide React Hook Form context
const Wrapper = ({ children }) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('RHFInput Component', () => {
  it('renders correctly and matches the snapshot', () => {
    // Render the component within the FormProvider
    const { asFragment } = render(
      <Wrapper>
        <RHFInput
          label="Test Label"
          fieldName="testField"
          helperText="Enter your text"
          hasParentError={false}
        />
      </Wrapper>
    );

    // Take a snapshot of the component
    expect(asFragment()).toMatchSnapshot();
  });

  it('shows error message when there is an error', () => {
    const { getByLabelText } = render(
      <Wrapper>
        <RHFInput
          label="Test Label"
          fieldName="testField"
          helperText="Enter your text"
          hasParentError={true}
        />
      </Wrapper>
    );

    // Trigger form validation and check for error message
    const inputElement = getByLabelText(/Test Label/i);
    inputElement.focus();
    inputElement.blur();

    expect(screen.getByText(/Fill out to continue/i)).toBeInTheDocument();
  });
});
