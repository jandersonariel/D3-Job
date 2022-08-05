import styled from "styled-components";
import { colors, medias } from "../../../global";
import { containerStyleProps } from "./interface";

const sizes = {
  maxContent: 'max-content' ,
  block: '100%',
  default: '1266px',
}

export const Container = styled.div<containerStyleProps>`
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ direction, align }) => !align ? direction === 'column' ? 'center' : 'flex-start' : align};
  justify-content: ${({ direction, justify }) => !justify ? direction === 'column' ? 'flex-start' : 'center' : justify};

  gap: ${({ gap }) => gap && `${gap[1]}px`};
  padding: ${({ pad }) => pad || '10px'};
  background-color: ${({ bgColor }) => bgColor ? colors[bgColor] : colors.transparent};

  max-width: ${({ maxW }) => maxW ? typeof maxW === 'number' ? `${maxW}px` : sizes[maxW] : '1280px'};
  max-height: ${({ maxH }) => maxH ? typeof maxH === 'number' ? `${maxH}px` : sizes[maxH] : ''};

  min-height: ${({ minH }) => minH ? typeof minH === 'number' ? `${minH}px` : sizes[minH] : ''};

  height: ${({ h }) => h ? typeof h === 'number' ? `${h}px` : sizes[h] : ''};
  width: ${({ w }) => w ? typeof w === 'number' ? `${w}px` : sizes[w] : '100%'};

  border-radius: ${({ radius }) => radius === 'none' ? 'none' : radius ? `${radius?.size}${radius?.style}` : '16px'};

  border-width: ${({ border }) => border === 'none' ? 'none' : border?.size};
  border-color: ${({ border }) => border === 'none' ? 'none' : border && colors[border.color]};
  border-style: ${({ border }) => border === 'none' ? 'none' : border?.style};

  position: ${({ pos }) => pos};


  @media (${medias.regular}) {
    flex-direction: ${({ direction, mobileResponsive }) => mobileResponsive && direction === 'column' ? 'row' : 'column'};
    align-items: ${({ direction, align }) => !align ? direction === 'row' ? 'flex-start' : 'center' : align === 'flex-start' ? 'center' : 'flex-start'};
    justify-content: ${({ direction, justify }) => !justify ? direction === 'row' ? 'center' : 'flex-start' : justify === 'flex-start' ? 'center' : 'flex-start'};
    gap: ${({ gap }) => gap && `${gap[0]}px`};
  }
`;