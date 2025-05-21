/**
 * @file Home.test.tsx
 * @description Unit test for the Home component. Mocks the useApi hook to provide controlled product data.
 */

import { describe, it, vi, beforeEach, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { Product } from '../../common/types';
import * as apiHook from '../../common/useApi';
import { BrowserRouter } from 'react-router-dom';

// Mock data typed as Product[]
const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Test Product',
    description: 'A great product',
    price: 100,
    discountedPrice: 80,
    image: {
      url: 'https://via.placeholder.com/150',
      alt: 'Test image',
    },
    reviews: [],
    rating: 4,
    tags: [],
  },
];

describe('Home component', () => {
  beforeEach(() => {
    // Mock the useApi hook
    vi.spyOn(apiHook, 'useApi').mockReturnValue({
      posts: mockProducts,
      isLoading: false,
      isError: false,
    });
  });

  it('renders heading, product card and search bar correctly', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { name: /browse our products/i })).toBeInTheDocument();
    expect(screen.getByText(/test product/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search products/i)).toBeInTheDocument();
  });
});
