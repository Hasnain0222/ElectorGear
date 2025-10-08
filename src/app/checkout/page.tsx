import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CheckoutForm from "@/components/checkout/checkout-form";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Secure Checkout
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          You're just a few steps away from your new gear.
        </p>
      </div>
      
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Shipping & Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CheckoutForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
