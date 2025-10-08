
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PackageSearch, Truck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type OrderStatus = 'Pending' | 'Shipped' | 'In Transit' | 'Delivered' | 'Not Found';

const OrderStatusTracker = ({ status }: { status: OrderStatus }) => {
  const statuses: OrderStatus[] = ['Pending', 'Shipped', 'In Transit', 'Delivered'];
  const currentIndex = statuses.indexOf(status);

  if (status === 'Not Found') {
    return (
        <div className="text-center text-red-500">
            <p>Order not found. Please check the ID and try again.</p>
        </div>
    )
  }

  return (
    <div className="flex items-center justify-between">
      {statuses.map((s, index) => (
        <div key={s} className="flex flex-col items-center">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              index <= currentIndex ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            {index + 1}
          </div>
          <p className="mt-2 text-sm">{s}</p>
        </div>
      ))}
    </div>
  );
};


export default function ProductTrackingPage() {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;

    // Dummy logic for demonstration
    const fakeStatus: OrderStatus[] = ['Pending', 'Shipped', 'In Transit', 'Delivered'];
    const hash = orderId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    if(orderId.toLowerCase() === "notfound") {
        setOrderStatus('Not Found');
    } else {
        const status = fakeStatus[hash % fakeStatus.length];
        setOrderStatus(status);
    }
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <PackageSearch className="mx-auto h-12 w-12 text-muted-foreground" />
        <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Track Your Order
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Enter your order ID below to see its current status.
        </p>
      </div>

      <Card className="mt-12">
        <form onSubmit={handleTrackOrder}>
          <CardHeader>
            <CardTitle>Order Tracking</CardTitle>
            <CardDescription>
              Please enter the ID you received in your order confirmation email.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="orderId">Order ID</Label>
                <Input 
                    id="orderId" 
                    placeholder="e.g., ORD-12345XYZ" 
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">
                <Truck className="mr-2 h-4 w-4" />
                Track Order
            </Button>
          </CardFooter>
        </form>
      </Card>

      {orderStatus && (
        <Card className="mt-8">
            <CardHeader>
                <CardTitle>Order Status: {orderId}</CardTitle>
                <CardDescription>Last updated: {new Date().toLocaleString()}</CardDescription>
            </CardHeader>
            <CardContent>
               <OrderStatusTracker status={orderStatus} />
            </CardContent>
        </Card>
      )}
    </div>
  );
}
