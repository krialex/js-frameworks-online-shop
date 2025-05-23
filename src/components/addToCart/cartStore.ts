import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../../common/types'; 

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

/**
 * useCartStore
 * 
 * A Zustand store for managing the shopping cart state.
 * 
 * Includes logic for:
 * - Adding products to the cart
 * - Increasing quantity if the product already exists
 * - Removing a product from the cart
 * - Clearing the entire cart
 * 
 * Cart state is persisted in localStorage under the key `cart-storage`.
 * 
 * @returns {Object} Store API with `cart`, `addToCart`, `removeFromCart`, and `clearCart`.
 */

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            addToCart: (product) =>
              set((state) => {
                const existing = state.cart.find((item) => item.id === product.id);
                if (existing) {
                  return {
                    cart: state.cart.map((item) =>
                      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                  };
                } else {
                  return {
                    cart: [...state.cart, { ...product, quantity: 1 }],
                  };
                }
              }),
          
            removeFromCart: (productId) =>
              set((state) => ({
                cart: state.cart.filter((item) => item.id !== productId),
              })),
          
            clearCart: () => set({ cart: [] }),
          }),
          { name: 'cart-storage' }
    )
);

