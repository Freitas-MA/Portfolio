import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer", () => {
  test("renders email address", () => {
    render(<Footer />);
    const emailLink = screen.getByText(/freitas\.ma\.1993@gmail\.com/i);
    expect(emailLink).toBeInTheDocument();
  });

  test("renders social media icons", () => {
    render(<Footer />);
    const linkedinIcon = screen.getByAltText(/linkedin/i);
    const githubIcon = screen.getByAltText(/github/i);
    expect(linkedinIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });

  test("renders copyright notice", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(
      /copyright © marcos freitas/i
    );
    expect(copyrightText).toBeInTheDocument();
  });
});