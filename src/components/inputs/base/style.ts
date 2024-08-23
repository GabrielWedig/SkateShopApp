import styled from 'styled-components'

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  .error {
    border: 1px solid var(--red);
    margin-bottom: 0;
  }

  input,
  textarea {
    font-family: 'Poppins';
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid var(--light-gray);
    font-size: 15px;
    background-color: var(--white);
    margin-bottom: 23px;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--gray);
  }
`

export const Label = styled.label`
  font-size: 15px;
`
