import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;

  color: #666360;
  border: 2px solid #232129;

  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  input {
    flex: 1;
    border: 0;
    color: #f4ede8;
    background: transparent;
    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 8px;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
