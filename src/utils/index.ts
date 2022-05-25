import type { Graduate, Quote } from '../types';

/**
 * Helper function that creates the endpoint URL.
 * @param route The route to fetch data from.
 * @returns The endpoint URL.
 */
export const api = (route: string): string => {
  const apiUrl = 'https://api.studentambassadors.sk/api';

  return `${apiUrl}/${route.replace(/^\//, '')}`;
};

/**
 * Fetch graduates from the API.
 * @returns Fetched graduates with years.
 */
export const fetchGraduates = async (): Promise<{
  graduates: Graduate[];
  years: number[];
}> => {
  const response = await fetch(api('stc/graduates'));
  const years: number[] = [];

  const result: {
    year: number;
    students: Graduate[];
  }[] = await response.json();

  const graduates = result.reduce((prev: Graduate[], next) => {
    years.push(next.year); // Add this year to years array.
    const sortedGraduates = next.students.sort((a, b) => {
      return a.graduateOrder - b.graduateOrder;
    });

    return [...prev, ...sortedGraduates];
  }, []);

  return {
    graduates,
    years,
  };
};

/**
 * Fetch quotes from the API.
 * @returns Fetched quotes.
 */
export const fetchQuotes = async (): Promise<Quote[]> => {
  const response = await fetch(api('stc/quotes'));
  const quotes: Quote[] = await response.json();

  return quotes.sort((a, b) => {
    return a.quoteOrder - b.quoteOrder;
  });
};
