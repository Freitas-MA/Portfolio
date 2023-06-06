import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./navbar";

describe("Navbar", () => {
  it("renders the navbar with logo and links", () => {
    const { getByAltText, getByText } = render(<Navbar />);
    const logo = getByAltText("Developer Logo");
    const aboutLink = getByText("About-me");
    const projectsLink = getByText("Projects");
    const contactLink = getByText("Contact");
    const resumeLink = getByText("RESUME");

    expect(logo).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(resumeLink).toBeInTheDocument();
  });

  it("toggles the mobile menu when hamburger menu is clicked", () => {
    const { getByTestId } = render(<Navbar />);
    const hamburger = getByTestId("hamburger");
    const navMenu = getByTestId("nav-menu");

    fireEvent.click(hamburger);

    expect(navMenu).toHaveClass("active");

    fireEvent.click(hamburger);

    expect(navMenu).not.toHaveClass("active");
  });

  it("switches the theme when toggle switch is clicked", () => {
    const { getByLabelText } = render(<Navbar />);
    const toggleSwitch = getByLabelText("Toggle Theme");

    fireEvent.click(toggleSwitch);

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");

    fireEvent.click(toggleSwitch);

    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });
});