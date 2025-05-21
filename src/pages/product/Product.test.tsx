/**
 * @fileoverview Test for the Product component.
 * This test mocks fetch to simulate loading a product from the API.
 */

import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Product } from './Product';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import 'whatwg-fetch';

// Mock product data
const mockProduct = {
  id: '1',
  title: 'Mocked Product',
  description: 'This is a product',
  price: 100,
  discountedPrice: 80,
  image: {
    url: 'https://via.placeholder.com/150',
    alt: 'product image'
  },
  reviews: [],
};

describe('Product component', () => {
  beforeEach(() => {
    // Mock fetch to return mocked product
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
    json: () => Promise.resolve({ data: mockProduct }),
    }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders product details correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Routes>
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </MemoryRouter>
    );

    // Initially shows loading spinner
    expect(screen.getByLabelText(/loading spinner/i)).toBeInTheDocument();

    // Wait for the title to appear
    await waitFor(() => {
      expect(screen.getByText(/mocked product/i)).toBeInTheDocument();
    });

    // Check that other elements show up
    expect(screen.getByText(/this is a product/i)).toBeInTheDocument();
    expect(screen.getByText(/80 kr/)).toBeInTheDocument(); // discountedPrice
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });
});
