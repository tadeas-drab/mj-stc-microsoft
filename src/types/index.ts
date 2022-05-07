import type { ISvgIconProps } from '@fluentui/react-icons-mdl2';

export type Icon = React.FC<
  React.HTMLAttributes<HTMLSpanElement> & ISvgIconProps
>;

export type Quote = {
  id: number;
  quote: string;
  quoteAuthor: string;
  quoteOrder: number;
};
