
"use client";

import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import CartItemCard from './cart-item';
import { ShoppingCart } from 'lucide-react';
import { SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';

const CartSheetContent = () => {
  const { cartItems, getCartTotal, getCartItemCount } = useCart();
  const total = getCartTotal();
  const itemCount = getCartItemCount();

  return (
    <>
      <SheetHeader className="p-6">
        <SheetTitle>Shopping Cart ({itemCount})</SheetTitle>
        <SheetDescription>
          Items in your cart. You can review and edit them before checkout.
        </SheetDescription>
      </SheetHeader>
      <Separator />
      {cartItems.length > 0 ? (
        <>
          <ScrollArea className="flex-1">
            <div className="flex flex-col gap-4 p-6">
              {cartItems.map(item => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>
          </ScrollArea>
          <Separator />
          <div className="space-y-4 p-6">
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Shipping and taxes will be calculated at checkout.
            </p>
            <div className="flex flex-col gap-2">
              <Button asChild className="w-full">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/cart">View Cart</Link>
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
          <ShoppingCart className="h-16 w-16 text-muted-foreground/50" />
          <h3 className="font-headline text-xl font-semibold">Your cart is empty</h3>
          <p className="text-muted-foreground">Add some products to get started.</p>
          <Button asChild>
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default CartSheetContent;
