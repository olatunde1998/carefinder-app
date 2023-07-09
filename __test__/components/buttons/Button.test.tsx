import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/app/components/buttons/Button";


describe('Button', () => {
    test('renders the button with correct text and icon', () => {
      const btnText = 'Click me';
      const btnIcon = <svg data-testid="btn-icon" />;
      const className = 'custom-class';
      render(<Button btnText={btnText} btnIcon={btnIcon} className={className} />);
    
      // Assert that the button is rendered with the correct text and icon
      expect(screen.getByText(btnText)).toBeInTheDocument();
      expect(screen.getByTestId('btn-icon')).toBeInTheDocument();
    });
  
    test('applies the custom class to the button', () => {
      const btnText = 'Click me';
      const btnIcon = <svg data-testid="btn-icon" />;
      const className = 'custom-class';
      render(<Button btnText={btnText} btnIcon={btnIcon} className={className} />);
    
      // Assert that the button has the custom class
      expect(screen.getByRole('button')).toHaveClass(className);
    });
  });
  