import React from "react";  
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Partner from "@/app/components/homePageComponents/partner";


describe("Partner component", () => {
    it("renders without crashing", () => {
      render(<Partner />);
    });
  
    it("displays the correct heading", () => {
      render(<Partner />);
      const heading = screen.getByRole("heading", { level: 5 });
      expect(heading).toHaveTextContent("Trusted by numerous Public sector clients.");
    });
  
    it("renders the partner logos", () => {
      render(<Partner />);
      const partnerLogos = screen.getAllByRole("img");
      expect(partnerLogos).toHaveLength(10);
    });
  
    // Add more tests as needed
  
    it("matches the snapshot", () => {
      const { container } = render(<Partner />);
      expect(container).toMatchSnapshot();
    });
  });
  