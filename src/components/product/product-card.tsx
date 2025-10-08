
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/types';
import { useCart } from '@/hooks/use-cart';
import { ShoppingCart } from 'lucide-react';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
       <Link href={`/product/${product.id}`} className="flex flex-1 flex-col">
          <CardHeader className="p-0">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                data-ai-hint={product.imageHint}
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col p-4">
            <div className="flex-1">
              <Badge variant="secondary" className="mb-2 bg-accent/20 text-accent">{product.category}</Badge>
              <CardTitle className="mb-2 line-clamp-2 font-headline text-lg font-semibold">{product.name}</CardTitle>
              <p className="mb-4 text-2xl font-bold text-primary">
                ₹{product.price.toFixed(2)}
              </p>
            </div>
          </CardContent>
      </Link>
      <div className="p-4 pt-0">
        <Button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
