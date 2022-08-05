import styled from 'styled-components';
import { colors } from '../../../../global'

export const ErrorContainer = styled.div`
  height: 100%;
  align-items: flex-end;

  gap: 8px;
  margin-top: 3px;

  color: ${colors.error};

  span {
    line-height: 10px;
  }
`;
