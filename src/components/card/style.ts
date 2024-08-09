import styled from 'styled-components'

interface ImageProps {
  url: string
}

export const Card = styled.div`
  position: relative;
`

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.url}) center / cover no-repeat;
  background-size: 110%;
  transition: background-size 300ms ease-in-out;

  &:hover {
    background-size: 120%;
  }
`
