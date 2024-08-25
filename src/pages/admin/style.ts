import styled from 'styled-components'

export const Navigation = styled.ul`
  position: fixed;
  left: 0;
  width: 20%;
  background-color: var(--black);
  height: 100%;
  padding: 50px;

  li > button {
    color: var(--white);
    font-size: 16px;
  }
`

export const Content = styled.div`
  padding: 50px 0;
  padding-left: 20%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
