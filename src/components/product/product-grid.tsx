
"use client";

import { useState, useMemo } from 'react';
import type { Product } from '@/lib/types';
import ProductCard from './product-card';
import ProductFilters from './product-filters';

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 170000]);

  const categories = useMemo(() => [...new Set(products.map(p => p.category))], [products]);
  const brands = useMemo(() => [...new Set(products.map(p => p.brand))], [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && brandMatch && priceMatch;
    });
  }, [products, selectedCategories, selectedBrands, priceRange]);

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <aside className="w-full lg:w-1/4 xl:w-1/5">
        <ProductFilters
          categories={categories}
          brands={brands}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </aside>
      <main className="flex-1">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex h-full min-h-[40vh] items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/20 p-8 text-center">
            <div>
              <h3 className="font-headline text-xl font-semibold text-foreground">No Products Found</h3>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductGrid;
