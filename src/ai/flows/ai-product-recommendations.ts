'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing AI-powered product recommendations based on user history.
 *
 * - getProductRecommendations - A function that takes user history and returns a list of recommended products.
 * - ProductRecommendationsInput - The input type for the getProductRecommendations function.
 * - ProductRecommendationsOutput - The return type for the getProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationsInputSchema = z.object({
  userHistory: z
    .string()
    .describe(
      'A string containing the user browsing history and past purchase behavior.'
    ),
  availableProducts: z
    .string()
    .describe('A string containing a list of available products for recommendation'),
});
export type ProductRecommendationsInput = z.infer<typeof ProductRecommendationsInputSchema>;

const ProductRecommendationsOutputSchema = z.object({
  recommendedProducts: z
    .string()
    .describe(
      'A string containing a list of product IDs recommended to the user, ranked by relevance.'
    ),
});
export type ProductRecommendationsOutput = z.infer<typeof ProductRecommendationsOutputSchema>;

export async function getProductRecommendations(
  input: ProductRecommendationsInput
): Promise<ProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

const productRecommendationPrompt = ai.definePrompt({
  name: 'productRecommendationPrompt',
  input: {schema: ProductRecommendationsInputSchema},
  output: {schema: ProductRecommendationsOutputSchema},
  prompt: `You are an expert e-commerce product recommendation system.

  Based on the user's browsing history and past purchase behavior, recommend a list of related products that the user might be interested in. Rank the products by relevance.

  User History: {{{userHistory}}}
  Available Products: {{{availableProducts}}}

  Output the list of recommended product IDs, ranked by relevance.
  `,
});

const productRecommendationsFlow = ai.defineFlow(
  {
    name: 'productRecommendationsFlow',
    inputSchema: ProductRecommendationsInputSchema,
    outputSchema: ProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await productRecommendationPrompt(input);
    return output!;
  }
);
