import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import CareFinder from "@/app/carefinder/page";


describe("CareFinder component", () => {
    it("renders without crashing", () => {
      render(<CareFinder />);
    });
  
    it("displays the welcome heading", () => {
      render(<CareFinder />);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toHaveTextContent("Welcome to CareFinder App");
    });
  
    it("renders the AltSchoolImage component", () => {
      render(<CareFinder />);
      const altSchoolImage = screen.getByTestId("altschool-image");
      expect(altSchoolImage).toBeInTheDocument();
    });
  
    it("renders the PlaceLocation component", () => {
      render(<CareFinder />);
      const placeLocation = screen.getByTestId("place-location");
      expect(placeLocation).toBeInTheDocument();
    });
  
    // Add more tests as needed
  
    it("matches the snapshot", () => {
      const { container } = render(<CareFinder />);
      expect(container).toMatchSnapshot();
    });
  });