
'use client';
import { useState, useEffect } from 'react';
import { products as staticProducts } from '@/lib/products';
import type { Product } from '@/lib/types';

// Mock API result types
interface UseCollectionResult<T> {
  data: T[] | null;
  isLoading: boolean;
  error: Error | null;
}

interface UseDocResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

// Mock a delay to simulate network latency
const mockFetch = <T,>(data: T, delay = 500): Promise<T> =>
  new Promise(resolve => setTimeout(() => resolve(data), delay));

export function useProducts(): UseCollectionResult<Product> {
  const [data, setData] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    mockFetch(staticProducts)
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
}

export function useProduct(id: string): UseDocResult<Product> {
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    const product = staticProducts.find(p => p.id === id) || null;
    
    mockFetch(product)
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
      
  }, [id]);

  return { data, isLoading, error };
}
