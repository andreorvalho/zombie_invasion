import { render, screen } from '@testing-library/react';
import CustomModal from "../components/CustomModal";

test('renders the custom modal', () => {
  render(<CustomModal itemType={'survivor'} toggle={()=>{}}><div>modal body</div></CustomModal>);
  const modalText = screen.getByText(/modal body/i);
  expect(modalText).toBeInTheDocument();
});
