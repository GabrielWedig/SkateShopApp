import styled from 'styled-components'

export const TopBar = styled.section`
  height: 30px;
  width: 100vw;
  background-color: var(--black);
  z-index: 1;

  .swipper {
    height: 100%;
  }

  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    color: white;
    font-size: 14px;
  }
`
