import styled from 'styled-components'

interface ImageProps {
  url: string
  height: number
}

export const Main = styled.section`
  padding: 20px 0;
`

export const Image = styled.div<ImageProps>`
  height: ${({ height }) => `${height}px`};
  background: url(${({ url }) => url}) center / cover no-repeat;
`
