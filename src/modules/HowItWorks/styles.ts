import styled from "styled-components";
import Image from 'next/image'

export const Group = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;

  span {
    width: 100% !important;
  }
`;

export const Img = styled(Image)`
  width: 100%;
`;

export const SubGroup = styled.span``;