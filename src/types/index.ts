import type { ISvgIconProps } from '@fluentui/react-icons-mdl2';

export type SvgIcon = React.FC<
  React.HTMLAttributes<HTMLSpanElement> & ISvgIconProps
>;

export type Quote = {
  id: number;
  quote: string;
  quoteAuthor: string;
  quoteOrder: number;
};
