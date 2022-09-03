export interface OpcProps {
  href: {
    pathname: `/${string}` | `#${string}` | `https://${string}`;
    rest?: object | undefined;
    as?: string | undefined;
  };
  label: string;
}
