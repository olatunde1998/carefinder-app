import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Medicine from '@/app/components/homePageComponents/medicine';



describe("Medicine component", () => {
    it("renders without crashing", () => {
      render(<Medicine />);
    });
  
    it("displays the correct heading", () => {
      render(<Medicine />);
      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading).toHaveTextContent("Root Cause Medicine");
    });
  
    it("renders the learn more link with the correct href", () => {
      render(<Medicine />);
      const link = screen.getByRole("link", { name: "Learn more" });
      expect(link).toHaveAttribute("href", "/conditions");
    });
  
    // Add more tests as needed
  
    it("matches the snapshot", () => {
      const { container } = render(<Medicine />);
      expect(container).toMatchSnapshot();
    });
  });