import styled from 'styled-components';

import { colors } from '../../../global';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6rem;
`;

export const BannerImage = styled.img`
  width: 454px;
  height: 449px;
  margin-top: 2rem;
`

export const ContainerBoxes = styled.div`
  flex-direction: column;
  margin-right: 4rem;
`

export const BannerBox = styled.div`
  display: flex;
  width: 275px;
  height: 180px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`

export const BannerMiddleBox = styled.div`
  display: flex;
  width: 275px;
  height: 180px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1em 0 1em 5em;
  cursor: pointer;
`

export const BoxText = styled.a`
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0.3rem;
  color: ${colors.secondary};
`

export const BoxIcon = styled.img`
  width: 63px;
  height: 67px;
`

export const BoxThirdIcon = styled.img`
  width: 63px;
  height: 48px;
`
