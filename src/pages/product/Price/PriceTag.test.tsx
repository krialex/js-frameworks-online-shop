import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PriceTag } from './PriceTag';

describe('PriceTag', () => {
  it('shows full price when there is no discount', () => {
    render(<PriceTag price={100} discountedPrice={100} />);
    
    expect(screen.getByText('100 kr')).toBeInTheDocument();
  });

  it('shows discounted and original price when discount exists', () => {
    render(<PriceTag price={200} discountedPrice={150} />);

    expect(screen.getByText('200 kr')).toBeInTheDocument(); 
    expect(screen.getByText('150 kr')).toBeInTheDocument(); 
  });

  it('does not show both if no discount', () => {
    render(<PriceTag price={99} discountedPrice={99} />);
    
    const allPrices = screen.getAllByText('99 kr');
    expect(allPrices).toHaveLength(1);
  });
});
