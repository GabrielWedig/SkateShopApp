import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  z-index: 2;
`

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  background-color: var(--white);
`

export const MainBox = styled.section`
  padding: 0 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  width: 100vw;
  box-shadow: var(--shadow);
`

export const Logo = styled.img`
  width: 200px;
`

export const Menu = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`

export const MenuButton = styled(motion.button)``

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  height: 130px;
  width: max-content;
  margin: 0 auto;
  top: 30px;
  left: 0;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;

  button {
    width: 180px;
    font-size: 15px;
    font-weight: 500;
    text-align: start;
  }

  li:last-child > button {
    width: 120px;
  }
`

export const BottomBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  background-color: var(--white);
  padding: 40px 0;
  width: 100vw;
  box-shadow: var(--shadow);
  position: absolute;

  ul:first-child {
    margin-left: 150px;
  }
`

export const Column = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    width: 180px;
    text-align: start;
  }
`

export const SearchBox = styled.div`
  display: flex;
  gap: 8px;
  width: 35%;
  height: max-content;
`
