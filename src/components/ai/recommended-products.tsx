
"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { useProducts } from "@/hooks/use-products";
import type { Product } from "@/lib/types";
import { getProductRecommendations } from "@/ai/flows/ai-product-recommendations";
import ProductCard from "../product/product-card";
import { Skeleton } from "../ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Terminal } from "lucide-react";

const RecommendedProducts = () => {
  const { cartItems } = useCart();
  const { data: products } = useProducts();
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (cartItems.length === 0 || !products) {
        setRecommendations([]);
        return;
      }

      setLoading(true);
      setError(null);
      
      try {
        const userHistory = `User has the following items in their cart: ${cartItems.map(item => `${item.name} (Qty: ${item.quantity})`).join(', ')}.`;
        const availableProducts = products
            .filter(p => !cartItems.some(ci => ci.id === p.id))
            .map(p => `ID: ${p.id}, Name: ${p.name}, Category: ${p.category}`).join('; ');

        const response = await getProductRecommendations({ userHistory, availableProducts });
        
        const recommendedIds = response.recommendedProducts.split(',').map(id => id.trim());
        const recommendedProducts = products.filter(p => recommendedIds.includes(p.id));
        
        // Ensure ranking from AI is respected
        const sortedRecommendations = recommendedIds
            .map(id => recommendedProducts.find(p => p.id === id))
            .filter((p): p is Product => p !== undefined);

        setRecommendations(sortedRecommendations.slice(0, 3)); // Show top 3 recommendations
      } catch (e) {
        console.error("Failed to get recommendations:", e);
        setError("We couldn't generate recommendations at this time. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    // Debounce the call to avoid rapid-firing on cart changes
    const handler = setTimeout(() => {
        fetchRecommendations();
    }, 500);

    return () => clearTimeout(handler);

  }, [cartItems, products]);

  if (cartItems.length === 0) {
      return null;
  }

  return (
    <div>
      <h2 className="mb-6 font-headline text-2xl font-bold tracking-tight sm:text-3xl">
        You Might Also Like
      </h2>
      {error && (
        <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Recommendation Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[200px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : recommendations.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendedProducts;
