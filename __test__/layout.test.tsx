import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RootLayout from "@/app/layout";


describe("RootLayout component", () => {
    it("renders without crashing", () => {
      render(<RootLayout>Test content</RootLayout>);
    });
  
    it("renders the children", () => {
      render(<RootLayout>Test content</RootLayout>);
      const content = screen.getByText("Test content");
      expect(content).toBeInTheDocument();
    });
  
    // Add more tests as needed
  
    it("matches the snapshot", () => {
      const { container } = render(<RootLayout>Test content</RootLayout>);
      expect(container).toMatchSnapshot();
    });
  });