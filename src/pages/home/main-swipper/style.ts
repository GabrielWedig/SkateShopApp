import styled from 'styled-components'

interface ImageProps {
  url: string
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: calc(100vh - 160px);
  background: url(${(props) => props.url}) center / cover no-repeat;
`
