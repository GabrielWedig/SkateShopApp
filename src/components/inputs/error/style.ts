import styled from 'styled-components'

export const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .message,
  svg {
    color: var(--red);
    font-size: 12px;
  }
`
