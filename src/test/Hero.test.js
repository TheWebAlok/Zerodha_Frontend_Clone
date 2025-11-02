import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from "../landing_page/Home/Hero"
// import '@testing-library/jest-dom/extend-expect';
// src/setupTests.js
import '@testing-library/jest-dom';

describe('Hero component', () => {
  test('renders hero image', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText(/hero image/i);
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
  });
});
