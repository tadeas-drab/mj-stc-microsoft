import { apiUrl } from '../config';
import { Quote } from '../types';

/**
 * Helper function that creates the endpoint URL.
 * @param route The route to fetch data from.
 * @returns The endpoint URL.
 */
export const api = (route: string): string => {
  return `${apiUrl}/${route.replace(/^\//, '')}`;
};

/**
 * Fetch quotes from the API.
 * @returns Fetched quotes.
 */
export const fetchQuotes = async (): Promise<Quote[]> => {
  const response = await fetch(api('stc/quotes'));
  const quotes: Quote[] = await response.json();

  return quotes.sort((a, b) => a.quoteOrder - b.quoteOrder);
};
