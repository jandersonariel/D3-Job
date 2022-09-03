import React, { ReactNode } from "react";
import styled from "styled-components";
import NextLink from "next/link";

import { Link } from "library-caiol.sousa";

import { colors } from "../../../global";

interface CustomLinkProps {
  children?: ReactNode;
  label: string;
  href: {
    pathname: `/${string}` | `#${string}` | `https://${string}`;
    rest?: object | undefined;
    as?: string | undefined;
  };
  type?: "buttonLink" | "normalLink";
}

const TagA = styled.a`
  text-decoration: none;
  color: ${colors.secondary};
`;

export const CustomLink = ({
  children,
  label,
  href,
  type = "normalLink",
}: CustomLinkProps) =>
  type === "buttonLink" ? (
    <NextLink href={{ pathname: href.pathname, ...href.rest }} as={href.as}>
      <TagA>{children}</TagA>
    </NextLink>
  ) : (
    <Link
      href={href}
      type="next"
      variant="default"
      colors={[colors.primary]}
      label={label}
    />
  );
