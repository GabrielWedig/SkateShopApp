import styled, { keyframes } from 'styled-components'

export const Header = styled.header`
  position: fixed;
`

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  background-color: white;
  border-bottom: 1px solid var(--light-gray);
  width: 100vw;
`

export const MainBox = styled.section`
  padding: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 130px;
`

export const Logo = styled.img`
  width: 250px;
`

export const Navigation = styled.nav`
  height: 130px;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  height: 100%;
  padding-left: 120px;

  li {
    width: 100px;
    display: flex;
    align-items: center;
    margin-right: 70px;
    font-size: 15px;
    font-weight: 500;
  }
`

const moves = keyframes`
  from {
    top: -160px;
  }
  to {
    top: 160px;
  }
`

export const BottomBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 25px 0;
  padding-left: 120px;
  width: 100vw;
  animation: ${moves} 300ms ease-in;
  position: absolute;
  left: 0;
  top: 160px;
`

export const Column = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    width: 120px;
    margin-right: 50px;
  }
`

export const SearchBox = styled.div`
  display: flex;
  gap: 8px;
  width: 35%;
`

export const Menu = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  width: 250px;

  svg:hover {
    transform: scale(1.2);
    transition: transform 200ms ease-in-out;
  }
`
