import styled from 'styled-components'

interface ItemProps {
  columnSize: number
}

export const Section = styled.section`
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

export const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 65%;
  min-height: 420px;
`

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 305px;
`

export const Header = styled.div<ItemProps>`
  padding: 0 10px;

  span {
    width: ${({ columnSize }) => `${columnSize}%`};
  }
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
  }

  div:last-child {
    width: max-content;
  }
`
