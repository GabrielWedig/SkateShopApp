import styled from 'styled-components'

interface ImageProps {
  url: string
}

export const Brands = styled.section`
  margin: 50px 0;
  display: flex;
  height: 100px;
  justify-content: space-between;
`

export const Image = styled.div<ImageProps>`
  background: url(${(props) => props.url}) center / 90% no-repeat;
  width: 150px;
`
