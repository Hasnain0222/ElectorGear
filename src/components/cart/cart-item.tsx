
"use client";

import Image from 'next/image';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import UpdateQuantityButtons from './update-quantity-buttons';

import type { CartItem } from '@/lib/types';

type CartItemProps = {
  item: CartItem;
};

const CartItemCard = ({ item }: CartItemProps) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex items-start gap-4">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h4 className="line-clamp-2 font-medium">{item.name}</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              ₹{item.price.toFixed(2)}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground"
            onClick={() => removeFromCart(item.id)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Remove item</span>
          </Button>
        </div>
        <div className="mt-2 flex items-center justify-between">
            <UpdateQuantityButtons
              quantity={item.quantity}
              onQuantityChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
            />
            <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
