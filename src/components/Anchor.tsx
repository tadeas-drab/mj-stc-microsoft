import Link, { LinkProps } from 'next/link';

export interface AnchorProps
  extends Pick<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'className' | 'rel' | 'target' | 'title'
  > {
  children: React.ReactNode;
  href: LinkProps['href'];
}

const Anchor = ({ children, href, ...props }: AnchorProps) => {
  return (
    <Link href={href} passHref>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default Anchor;
