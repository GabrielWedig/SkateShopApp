import { TopBar, Visible, ZoomAnimation } from '..'
import * as S from './style'
import { Logo } from '../../img'
import { useState } from 'react'
import { CiSearch, CiUser, CiShoppingBasket, CiMenuFries } from 'react-icons/ci'
import { IoCloseOutline } from 'react-icons/io5'
import { SearchInput } from '..'
import content from './content.json'
import { Menu } from './Menu'
import { useUserContext, useWindowSize } from '../../hooks'
import { ResponsiveMenu } from './ResponsiveMenu'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const [search, setSearch] = useState<boolean>(false)
  const [menu, setMenu] = useState<boolean>(false)

  const { w1200 } = useWindowSize()
  const { isLogged } = useUserContext()

  const navigate = useNavigate()

  const openMenu = () => setMenu(true)
  const closeMenu = () => setMenu(false)

  const showFullSearch = search && w1200

  const handleUserClick = () => {
    const destination = isLogged ? 'profile' : 'login'
    navigate(destination)
  }

  return (
    <S.Header>
      <S.TopBox>
        <TopBar />
        <S.MainBox>
          <Visible when={!showFullSearch}>
            <S.LogoBtn onClick={() => navigate('/')}>
              <ZoomAnimation>
                <img src={Logo} />
              </ZoomAnimation>
            </S.LogoBtn>
          </Visible>
          <Visible when={search}>
            <S.SearchBox>
              <SearchInput onSearch={() => console.log('search')} />
              <button onClick={() => setSearch(false)}>
                <IoCloseOutline size={28} style={{ marginTop: '5px' }} />
              </button>
            </S.SearchBox>
          </Visible>
          <Visible when={!w1200 && !search}>
            <S.Navigation>
              <S.List onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                {content.map((item) => (
                  <li>
                    <button>{item.header}</button>
                  </li>
                ))}
              </S.List>
            </S.Navigation>
          </Visible>
          <Visible when={!showFullSearch}>
            <S.Buttons>
              <button onClick={() => setSearch((search) => !search)}>
                <ZoomAnimation>
                  <CiSearch size={28} />
                </ZoomAnimation>
              </button>
              <button onClick={handleUserClick}>
                <ZoomAnimation>
                  <CiUser size={28} />
                </ZoomAnimation>
              </button>
              <button>
                <ZoomAnimation>
                  <CiShoppingBasket size={28} />
                </ZoomAnimation>
              </button>
              <Visible when={w1200}>
                <button onClick={openMenu}>
                  <CiMenuFries size={25} />
                </button>
              </Visible>
            </S.Buttons>
          </Visible>
        </S.MainBox>
      </S.TopBox>
      <Visible when={!w1200}>
        <Menu visible={menu} open={openMenu} close={closeMenu} />
      </Visible>
      <Visible when={w1200}>
        <ResponsiveMenu visible={menu} close={closeMenu} />
      </Visible>
    </S.Header>
  )
}
