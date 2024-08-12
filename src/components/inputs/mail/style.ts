import styled from 'styled-components'

export const MailInput = styled.div`
  padding: 8px 10px 8px 18px;
  border: 1px solid black;
  border-radius: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  input {
    width: 100%;
    font-size: 16px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    position: absolute;
    top: 2px;
    right: 2px;
    height: 90%;
    width: 100px;
    border-radius: 60px;
    color: white;
    font-weight: 500;
  }
`
