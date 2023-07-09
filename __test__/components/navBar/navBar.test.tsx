import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/app/components/navBar/navBar";


describe("Navbar", () => {
    test("renders Navbar component", () => {
      render(<Navbar />);
      
      // Check if the logo is rendered
      const logoElement = screen.getByAltText("AltSchool logo");
      expect(logoElement).toBeInTheDocument();
      
      // Check if the menu items are rendered
      const homeLinks = screen.getAllByText(/Home/i);
      expect(homeLinks.length).toBe(2);
  
      const aboutLink = screen.getByText(/About/i);
      expect(aboutLink).toBeInTheDocument();
  
      const skillsLink = screen.getByText(/Skills/i);
      expect(skillsLink).toBeInTheDocument();
  
      const workLink = screen.getByText(/Work/i);
      expect(workLink).toBeInTheDocument();
  
      const contactLink = screen.getByText(/Contact/i);
      expect(contactLink).toBeInTheDocument();
    });
  
    test("toggles mobile menu when hamburger is clicked", () => {
      render(<Navbar />);
  
      // Initially, the mobile menu should be hidden
      const mobileMenu = screen.queryByTestId("mobile-menu");
      expect(mobileMenu).not.toBeInTheDocument();
  
      // Click the hamburger icon
      const hamburgerIcon = screen.getByTestId("hamburger-icon");
      fireEvent.click(hamburgerIcon);
  
      // After clicking, the mobile menu should be visible
      expect(mobileMenu).toBeInTheDocument();
  
      // Click the hamburger icon again
      fireEvent.click(hamburgerIcon);
  
      // After clicking again, the mobile menu should be hidden
      expect(mobileMenu).not.toBeInTheDocument();
    });
  
    test("closes mobile menu when a menu item is clicked", () => {
      render(<Navbar />);
      
      // Open the mobile menu
      const hamburgerIcon = screen.getByTestId("hamburger-icon");
      fireEvent.click(hamburgerIcon);
  
      // Click a menu item
      const homeLink = screen.getAllByText(/Home/i)[0]; // Select the first element
      fireEvent.click(homeLink);
  
      // After clicking, the mobile menu should be closed
      const mobileMenu = screen.queryByTestId("mobile-menu");
      expect(mobileMenu).not.toBeInTheDocument();
    });
  });