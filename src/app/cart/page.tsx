
"use client";

import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import CartItemCard from '@/components/cart/cart-item';
import { ShoppingCart } from 'lucide-react';
import RecommendedProducts from '@/components/ai/recommended-products';

export default function CartPage() {
  const { cartItems, getCartTotal, getCartItemCount } = useCart();
  const total = getCartTotal();
  const itemCount = getCartItemCount();

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
        Your Shopping Cart
      </h1>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{itemCount} Item{itemCount > 1 ? 's' : ''}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col">
                  {cartItems.map((item, index) => (
                    <div key={item.id} className="p-6">
                        <CartItemCard item={item} />
                        {index < cartItems.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed bg-secondary/30 p-8 text-center">
          <ShoppingCart className="h-20 w-20 text-muted-foreground/50" />
          <h2 className="font-headline text-2xl font-semibold">Your Cart is Empty</h2>
          <p className="max-w-md text-muted-foreground">Looks like you haven't added anything to your cart yet. Start exploring our products to find something you like!</p>
          <Button asChild size="lg">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
