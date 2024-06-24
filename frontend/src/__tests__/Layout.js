import { render, screen } from '@testing-library/react';
import Layout from "../components/pages/Layout";

test('renders the custom modal', () => {
  render(<Layout/>);
  const homeLinkText = screen.getByText(/Home/i);
  expect(homeLinkText).toBeInTheDocument();
  const createLinkText = screen.getByText(/Create a survivor/i);
  expect(createLinkText).toBeInTheDocument();
});
