import styled from 'styled-components'

interface ImageProps {
  url: string
}

export const Product = styled.div`
  width: 100%;
  height: max-content;
`

export const ImageBox = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.url}) center / cover no-repeat;
  background-size: 100%;
`

export const Card = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--light-gray);
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  gap: 5px;
`
