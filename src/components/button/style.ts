import styled from 'styled-components'

export const SeeMoreBtn = styled.button`
  border: none;
  background-color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 600;
  position: absolute;
  bottom: 25px;
  left: 25px;
`

export const PrimaryBtn = styled.button`
  border: none;
  background-color: var(--black);
  padding: 12px 48px;
  border-radius: 30px;
  font-size: 15px;
  color: var(--white);
  width: max-content;
  display: flex;
  align-items: center;
  gap: 10px;

  &:disabled {
    opacity: 0.2;
    cursor: auto;
  }
`
