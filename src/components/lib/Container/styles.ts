import styled from "styled-components";
import { colors, medias } from "../../../global";
import { containerStyleProps } from "./interface";

export const Container = styled.div<containerStyleProps>`
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ direction, align }) => !align ? direction === 'column' ? 'center' : 'flex-start' : align};
  justify-content: ${({ direction, justify }) => !justify ? direction === 'column' ? 'flex-start' : 'center' : justify};

  gap: ${({ gap }) => gap && `${gap[1]}px`};
  padding: ${({ pad }) => pad || '10px'};
  background-color: ${({ bgColor }) => bgColor ? colors[bgColor] : 'transparent'};

  max-width: ${({ maxW }) => maxW ? maxW !== 'max-content' ? `${maxW}px` : maxW : '1280px'};
  max-height: ${({ maxH }) => maxH ? maxH !== 'max-content' ? `${maxH}px` : maxH : 'max-content'};

  height: ${({ h }) => h !== 'max-content' ? `${h}px` : 'max-content'};
  width: ${({ w }) => w ? w !== 'max-content' ? `${w}px` : 'max-content' : '100%'};

  border-radius: ${({ radius }) => radius ? `${radius?.size}${radius?.style}` : '16px'};

  border-width: ${({ border }) => border?.size};
  border-color: ${({ border }) => border && colors[border.color]};
  border-style: ${({ border }) => border?.style};


  @media (${medias.regular}) {
    flex-direction: ${({ direction, mobileResponsive }) => mobileResponsive && direction === 'column' ? 'row' : 'column'};
    align-items: ${({ direction, align }) => !align ? direction === 'row' ? 'flex-start' : 'center' : align === 'flex-start' ? 'center' : 'flex-start'};
    justify-content: ${({ direction, justify }) => !justify ? direction === 'row' ? 'center' : 'flex-start' : justify === 'flex-start' ? 'center' : 'flex-start'};
    gap: ${({ gap }) => gap && `${gap[0]}px`};
  }
`;