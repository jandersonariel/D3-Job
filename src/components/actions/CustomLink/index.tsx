import React, { ReactNode } from "react";
import styled from "styled-components";
import NextLink from "next/link";

import { Link } from "library-caiol.sousa";

import { colors } from "../../../global";

interface CustomLinkProps {
  children?: ReactNode;
  label: string;
  href: `/${string}` | `#${string}` | `https://${string}`;
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
    <NextLink href={href}>
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
