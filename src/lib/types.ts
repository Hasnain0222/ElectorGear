
export type WithId<T> = T & { id: string };

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
  category: string;
  brand: string;
  specifications: Record<string, string>;
};

export type CartItem = {
  id: string; // This is the product ID in this version
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  isCartLoading: boolean;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
};
