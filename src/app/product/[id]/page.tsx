
'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useProduct } from '@/hooks/use-products';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Zap } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import type { Product } from '@/lib/types';


function ProductDetailSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Skeleton className="aspect-square w-full md:aspect-auto" />
        <div className="flex flex-col">
          <CardHeader>
            <Skeleton className="mb-2 h-6 w-24" />
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
            <Skeleton className="h-12 w-1/2" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
            </div>
            <div>
              <Skeleton className="mb-2 h-6 w-32" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
              </div>
            </div>
          </CardContent>
          <div className="p-6 pt-0">
            <Separator className="mb-6" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}


export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { data: product, isLoading } = useProduct(id);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <ProductDetailSkeleton />
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const handleBuyNow = () => {
    addToCart(product as Product);
    router.push('/checkout');
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint={product.imageHint}
            />
          </div>
          <div className="flex flex-col">
            <CardHeader>
              <Badge variant="secondary" className="mb-2 w-fit bg-accent/20 text-accent">
                {product.category}
              </Badge>
              <CardTitle className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                {product.name}
              </CardTitle>
              <CardDescription className="text-lg">
                by {product.brand}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <p className="text-4xl font-bold text-primary">
                ₹{product.price.toFixed(2)}
              </p>
              <p className="text-muted-foreground">{product.description}</p>
              
              <div>
                <h4 className="mb-2 font-semibold">Specifications:</h4>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                        <li key={key}>
                            <span className="font-medium text-foreground">{key}:</span> {value}
                        </li>
                    ))}
                </ul>
              </div>

            </CardContent>
            <div className="p-6 pt-0">
                <Separator className="mb-6" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Button 
                        size="lg" 
                        variant="outline"
                        onClick={() => addToCart(product as Product)}
                    >
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                    </Button>
                    <Button 
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-accent/90"
                        onClick={handleBuyNow}
                    >
                        <Zap className="mr-2 h-5 w-5" />
                        Buy Now
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
