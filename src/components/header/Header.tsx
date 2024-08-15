import { TopBar } from '..'
import * as S from './style'
import { Logo } from '../../img'
import { useState } from 'react'
import { CiSearch, CiUser, CiShoppingBasket } from 'react-icons/ci'
import { IoCloseOutline } from 'react-icons/io5'
import { SearchInput } from '..'
import content from './content.json'
import { BottomBox } from './BottomBox'
import { MenuButton } from './MenuButton'

export const Header = () => {
  const [search, setSearch] = useState<boolean>(false)
  const [navigation, setNavigation] = useState<boolean>(false)

  const openBottomBox = () => setNavigation(true)
  const closeBottomBox = () => setNavigation(false)

  return (
    <S.Header>
      <S.TopBox>
        <TopBar />
        <S.MainBox>
          <MenuButton onClick={() => console.log()}>
            <S.Logo src={Logo} />
          </MenuButton>
          {search ? (
            <S.SearchBox>
              <SearchInput />
              <button onClick={() => setSearch(false)}>
                <IoCloseOutline size={28} style={{ marginTop: '5px' }} />
              </button>
            </S.SearchBox>
          ) : (
            <S.Navigation>
              <S.List
                onMouseEnter={openBottomBox}
                onMouseLeave={closeBottomBox}
              >
                {content.map((item) => (
                  <li>
                    <button>{item.header}</button>
                  </li>
                ))}
              </S.List>
            </S.Navigation>
          )}
          <S.Menu>
            <MenuButton onClick={() => setSearch((search) => !search)}>
              <CiSearch size={28} />
            </MenuButton>
            <MenuButton onClick={() => console.log()}>
              <CiUser size={28} />
            </MenuButton>
            <MenuButton onClick={() => console.log()}>
              <CiShoppingBasket size={28} />
            </MenuButton>
          </S.Menu>
        </S.MainBox>
      </S.TopBox>
      <BottomBox
        visible={navigation}
        open={openBottomBox}
        close={closeBottomBox}
      />
    </S.Header>
  )
}
