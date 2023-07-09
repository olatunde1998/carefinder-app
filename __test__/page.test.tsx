import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Home component", () => {
    it("renders without crashing", () => {
      render(<Home />);
    });
  
    it("renders the NavBar component", () => {
      render(<Home />);
      const navBar = screen.getByTestId("nav-bar");
      expect(navBar).toBeInTheDocument();
    });
  
    it("renders the Hero component", () => {
      render(<Home />);
      const hero = screen.getByTestId("hero");
      expect(hero).toBeInTheDocument();
    });
  
    it("renders the Condition component", () => {
      render(<Home />);
      const condition = screen.getByTestId("condition");
      expect(condition).toBeInTheDocument();
    });
  
    it("renders the Medicine component", () => {
      render(<Home />);
      const medicine = screen.getByTestId("medicine");
      expect(medicine).toBeInTheDocument();
    });
  
    it("renders the Partner component", () => {
      render(<Home />);
      const partner = screen.getByTestId("partner");
      expect(partner).toBeInTheDocument();
    });
  
    it("renders the Footer component", () => {
      render(<Home />);
      const footer = screen.getByTestId("footer");
      expect(footer).toBeInTheDocument();
    });
  
    // Add more tests as needed
  
    it("matches the snapshot", () => {
      const { container } = render(<Home />);
      expect(container).toMatchSnapshot();
    });
  });