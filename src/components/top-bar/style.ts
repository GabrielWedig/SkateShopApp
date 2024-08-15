import styled, { keyframes } from 'styled-components'

export const TopBar = styled.section`
  height: 30px;
  background-color: black;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  z-index: 1;
`

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

export const Slider = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  animation: ${moveLeft} 60s linear infinite;
`

export const Item = styled.p`
  color: white;
  font-size: 14px;
  margin: 0 300px;
  display: inline-block;
`
