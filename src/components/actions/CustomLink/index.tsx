import React, { ReactNode } from "react";
import styled from "styled-components";
import NextLink from "next/link";

import { Link, HrefProps } from "library-caiol.sousa";

import { colors } from "../../../global";

interface CustomLinkProps {
  children?: ReactNode;
  label: string;
  href: HrefProps;
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
    <NextLink href={href.customLink || href.defautlLink} as={href.as}>
      <TagA>{children}</TagA>
    </NextLink>
  ) : (
    <Link
      href={{
        customLink: href.customLink,
        defautlLink: href.defautlLink,
        as: href.as,
      }}
      type="next"
      variant="default"
      colors={[colors.primary]}
      label={label}
    />
  );
