
'use client';
import { useProducts } from '@/hooks/use-products';
import ProductGrid from '@/components/product/product-grid';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const { data: products, isLoading } = useProducts();

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Product Catalog
      </h1>
      {isLoading || !products ? (
         <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Skeleton className="h-[400px] w-full" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:col-span-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <Skeleton className="h-[200px] w-full rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
         </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}
