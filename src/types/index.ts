import type { ISvgIconProps } from '@fluentui/react-icons-mdl2';
import type { HTMLAttributes } from 'react';

export type SvgIcon = React.FC<
  HTMLAttributes<HTMLSpanElement> & ISvgIconProps
>;

export type Quote = {
  id: number;
  quote: string;
  quoteAuthor: string;
  quoteOrder: number;
};

export type BaseStudent = {
  id: number;
  stcName: string;
  stcYear: number;
  stcOrder: number;
};

export type Student = BaseStudent & {
  stcSchool: string;
  stcBio: string;
  stcInterests: string;
  stcLinkedIn: string;
};

export type StudentYear = {
  students: BaseStudent[];
  year: number;
};

export type Graduate = {
  id: number;
  graduateName: string;
  graduationYear: number;
  graduationTheme: string;
  graduateSocials: string;
  graduateOrder: number;
  isAmbassador: boolean;
};

export type GraduateYear = {
  students: Graduate[];
  year: number;
};
