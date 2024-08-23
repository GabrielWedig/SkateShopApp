import styled from 'styled-components'

interface InputProps {
  size?: number
}

export const InputBox = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: ${({ size }) => (size ? `${size}px` : '100%')};

  .error {
    border: 1px solid var(--red);
    /* margin-bottom: 0;
    border-radius: 8px; */
  }

  input,
  textarea {
    font-family: 'Poppins';
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid var(--light-gray);
    font-size: 15px;
    background-color: var(--white);
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--gray);
  }
`

export const Label = styled.label`
  font-size: 15px;
`
