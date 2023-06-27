import type {
  GraduateYear,
  StudentYear,
  BaseStudent,
  Graduate,
  Student,
  Quote,
  RegistrationStatus,
} from '../types';

/**
 * Helper function that creates the endpoint URL.
 * @param route The route to fetch data from.
 * @returns The endpoint URL.
 */
export const api = (route: string) => {
  const apiUrl = 'https://api.studentambassadors.sk/api';

  return `${apiUrl}/${route.replace(/^\//, '')}`;
};

/**
 * Fetch students from the API.
 * @returns Fetched students.
 */
export const fetchStudents = async (): Promise<StudentYear[]> => {
  const response = await fetch(api('stc/students'));
  const students: StudentYear[] = await response.json();

  return students.map(({ students, year }) => ({
    students: students.sort((a, b) => a.stcOrder - b.stcOrder),
    year,
  }));
};

/**
 * Fetch a full student profile from the API.
 * @param id The given student's ID.
 * @returns The fetched student.
 */
export const fetchStudent = async (
  id: BaseStudent['id']
): Promise<Student> => {
  const response = await fetch(api(`stc/students/${id}/full`));
  const students: Student[] = await response.json();
  return students[0]; // Return the first student.
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
  const result: GraduateYear[] = await response.json();
  const years: number[] = [];

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

/**
 * Fetch registration status
 * @returns Registration status
 */
export const fetchRegistration = async (): Promise<RegistrationStatus> => {
  const response = await fetch(api(`stc/registration`));
  const regStatus: RegistrationStatus = await response.json();
  return regStatus;
};
