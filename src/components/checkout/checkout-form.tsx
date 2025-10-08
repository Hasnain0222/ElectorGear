
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Lock, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  shippingName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  shippingAddress: z.string().min(5, { message: "Address is too short." }),
  shippingCity: z.string().min(2, { message: "City is too short." }),
  shippingState: z.string().min(2, { message: "State is too short." }),
  shippingZip: z.string().regex(/^\d{5}(-\d{4})?$/, { message: "Invalid ZIP code." }),
  cardName: z.string().min(2, { message: "Name on card is required." }),
  cardNumber: z.string().regex(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, { message: "Invalid card number." }),
  cardExpiry: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, { message: "Invalid expiry date (MM/YY)." }),
  cardCvc: z.string().regex(/^[0-9]{3,4}$/, { message: "Invalid CVC." }),
});

// Mock payment processing function
const processPayment = async (values: z.infer<typeof formSchema>, total: number) => {
  console.log("Processing payment for:", { ...values, total });
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // In a real app, you would integrate with a payment gateway like Stripe or Razorpay here.
  // For this mock, we'll always return success.
  return { success: true, transactionId: `txn_${Date.now()}` };
};


export default function CheckoutForm() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();
  const total = getCartTotal();
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      shippingName: "",
      shippingAddress: "",
      shippingCity: "",
      shippingState: "",
      shippingZip: "",
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsProcessing(true);
    try {
      const paymentResult = await processPayment(values, total);

      if (paymentResult.success) {
        toast({
          title: "Order Placed!",
          description: `Transaction ID: ${paymentResult.transactionId}. Thank you for your purchase.`,
        });
        clearCart();
        // Redirect to a confirmation page or home
        router.push('/');
      } else {
        throw new Error("Payment failed. Please try again.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Payment Error",
        description: (error as Error).message || "An unexpected error occurred.",
      });
    } finally {
      setIsProcessing(false);
    }
  }

  if (cartItems.length === 0 && !isProcessing) {
    return (
      <div className="text-center text-muted-foreground">
        Your cart is empty. Please add items before checking out.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="md:col-span-1">
        <h3 className="mb-6 font-headline text-xl font-semibold">Order Summary</h3>
        <div className="space-y-4">
            {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border">
                            <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                        </div>
                        <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                    </div>
                    <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
            ))}
            <Separator />
            <div className="flex justify-between font-semibold">
                <p>Subtotal</p>
                <p>₹{total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-semibold">
                <p>Shipping</p>
                <p>FREE</p>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
                <p>Total</p>
                <p>₹{total.toFixed(2)}</p>
            </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:col-span-1">
          <div>
            <h3 className="mb-4 font-headline text-xl font-semibold">Contact Information</h3>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} disabled={isProcessing} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <h3 className="mb-4 font-headline text-xl font-semibold">Shipping Address</h3>
            <div className="space-y-4">
              <FormField control={form.control} name="shippingName" render={({ field }) => ( <FormItem> <FormLabel>Full Name</FormLabel> <FormControl> <Input placeholder="John Doe" {...field} disabled={isProcessing} /> </FormControl> <FormMessage /> </FormItem> )}/>
              <FormField control={form.control} name="shippingAddress" render={({ field }) => ( <FormItem> <FormLabel>Address</FormLabel> <FormControl> <Input placeholder="1234 Main St" {...field} disabled={isProcessing} /> </FormControl> <FormMessage /> </FormItem> )}/>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <FormField control={form.control} name="shippingCity" render={({ field }) => ( <FormItem> <FormLabel>City</FormLabel> <FormControl> <Input placeholder="Anytown" {...field} disabled={isProcessing} /> </FormControl> <FormMessage /> </FormItem> )}/>
                <FormField control={form.control} name="shippingState" render={({ field }) => ( <FormItem> <FormLabel>State</FormLabel> <FormControl> <Input placeholder="CA" {...field} disabled={isProcessing} /> </FormControl> <FormMessage /> </FormItem> )}/>
                <FormField control={form.control} name="shippingZip" render={({ field }) => ( <FormItem> <FormLabel>ZIP</FormLabel> <FormControl> <Input placeholder="12345" {...field} disabled={isProcessing} /> </FormControl> <FormMessage /> </FormItem> )}/>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 font-headline text-xl font-semibold">Payment Details</h3>
            <div className="space-y-4">
              <FormField control={form.control} name="cardName" render={({ field }) => ( <FormItem> <FormLabel>Name on Card</FormLabel> <FormControl> <Input placeholder="John M Doe" {...field} disabled={isProcessing} /> </FormControl> <FormMessage /> </FormItem> )}/>
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="•••• •••• •••• ••••"
                          className="pl-10"
                          {...field}
                          disabled={isProcessing}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField control={form.control} name="cardExpiry" render={({ field }) => ( <FormItem> <FormLabel>Expiration (MM/YY)</FormLabel> <FormControl> <Input placeholder="MM/YY" {...field} disabled={isProcessing} /> </FormControl> <FormMessage /> </FormItem> )}/>
                <FormField control={form.control} name="cardCvc" render={({ field }) => ( <FormItem> <FormLabel>CVC</FormLabel> <FormControl> <Input placeholder="123" {...field} disabled={isProcessing} /> </FormControl> <FormMessage /> </FormItem> )}/>
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
            {isProcessing ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <Lock className="mr-2 h-4 w-4" />
            )}
            {isProcessing ? 'Processing...' : `Pay ₹${total.toFixed(2)}`}
          </Button>
        </form>
      </Form>
    </div>
  );
}
