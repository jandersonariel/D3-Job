import styled from 'styled-components';
import { theme } from '../../../../global'

export const ErrorContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  gap: 8px;
  margin-top: 3px;

  color: ${theme.colors.error};

  span {
    line-height: 10px;
  }
`;
