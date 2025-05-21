import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CartIcon } from './CartIcon';
import { BrowserRouter } from 'react-router-dom';
import * as cartStore from './cartStore';

describe('CartIcon component', () => {
  beforeEach(() => {
    vi.spyOn(cartStore, 'useCartStore').mockReturnValue([
      { id: '1', title: 'Item A', quantity: 2 },
      { id: '2', title: 'Item B', quantity: 3 },
    ]);
  });

  it('renders cart icon with total number of items', () => {
    render(
      <BrowserRouter>
        <CartIcon />
      </BrowserRouter>
    );

    // Check that the cart number is correct
    expect(screen.getByText('5')).toBeInTheDocument();

    // Check that the shopping cart icon is present
    expect(screen.getByRole('link')).toHaveAttribute('href', '/checkout');
  });
});
