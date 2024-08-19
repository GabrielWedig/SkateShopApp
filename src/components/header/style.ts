import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  z-index: 2;
`

export const TopBox = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
  box-shadow: var(--shadow);
`

export const MainBox = styled.section`
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  width: 100vw;
  background-color: var(--white);

  @media (max-width: 1200px) {
    height: 80px;
  }
`

export const LogoBtn = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 25%;

  img {
    width: 160px;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  width: 25%;
`

export const Navigation = styled.nav`
  display: flex;
  align-self: flex-end;
  height: calc(50% + 12px);
  width: 50%;
`

export const List = styled.ul`
  display: flex;
  width: 100%;

  li {
    width: 23%;
  }

  li:last-child {
    width: 8%;
  }

  button {
    font-size: 15px;
    font-weight: 500;
    text-align: start;
  }
`

export const Menu = styled(motion.div)`
  display: flex;
  width: 100vw;
  background-color: var(--white);
  padding: 40px 0;
  box-shadow: var(--shadow);
  position: absolute;
`

export const ResponsiveMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: var(--white);
  padding: 20px 0;
  position: absolute;
  z-index: 3;
`

export const CloseBox = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 3%;
`

export const ItemRow = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-gray);
  padding: 10px 10%;
  width: 100%;
  font-size: 16px;

  button {
    color: var(--gray);
  }
`

export const Categories = styled.ul``

export const Column = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 9.2%;

  &:first-child {
    margin-left: 30%;
  }
`

export const SearchBox = styled.div`
  display: flex;
  gap: 8px;
  width: 50%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`
