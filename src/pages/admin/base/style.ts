import styled from 'styled-components'

interface ItemProps {
  columnSize: number
}

export const TableBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  form {
    width: 30%;
  }

  form > .buttons {
    display: flex;
    gap: 10px;
  }
`

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 65%;
`

export const Header = styled.div<ItemProps>`
  padding: 10px;

  span {
    width: ${({ columnSize }) => `${columnSize}%`};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Item = styled.div<ItemProps>`
  padding: 10px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;

  span,
  div {
    width: ${({ columnSize }) => `${columnSize}%`};
  }

  div {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
  }
`
