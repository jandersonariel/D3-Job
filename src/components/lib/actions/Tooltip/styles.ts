import styled, { css } from 'styled-components';

import { medias, theme } from '../../../../global';

import { ITooltipStyles } from './interface';

const handlePlacementTooltip = ({ placement }: ITooltipStyles) => {
  switch (placement) {
    case 'downBegin':
      return css`
        left: 5%;
        transform: translate(-2%);
      `;
    case 'downMiddle':
      return css`
        left: 55%;
        transform: translateX(-50%);
      `;
    default:
      return css`
        left: -20%;
        transform: translate(-87%);
      `;
  }
};

const handlePlacementTooltipArrow = ({ placement }: ITooltipStyles) => {
  switch (placement) {
    case 'downBegin':
      return css`
        left: 4%;
        transform: translateX(-12%);
      `;
    case 'downMiddle':
      return css`
        left: 50%;
        transform: translate(-56%);
      `;
    default:
      return css`
        left: 90%;
        transform: translateX(10%);
      `;
  }
};

export const Container = styled.div<ITooltipStyles>`
  position: relative;

  span:hover {
    opacity: 0.7;
  }

  &:hover span:first-child {
    opacity: 1;
    visibility: visible;
  }
`;

export const Label = styled.span<ITooltipStyles>`
  position: absolute;

  width: 304px;

  padding: 12px 20px;

  z-index: 15;

  border-radius: 4px;

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.4s;

  bottom: calc(100% + 8px);

  ${({ placement }) => handlePlacementTooltip({ placement })}

  text-align: center;
  color: ${theme.colors.primary};


  background: ${theme.colors.secondary};

  &::before {
    content: '';
    border-style: solid;
    border-color: ${theme.colors.primary} transparent;
    border-width: 4px 4px 0 4px;
    top: 100%;
    position: absolute;

    ${({ placement }) => handlePlacementTooltipArrow({ placement })}
  }
`;

export const Description = styled.span`
  display: flex;

  svg {
    color: ${theme.colors.primary};
    width: 20px;
    height: 20px;
  }
`;
