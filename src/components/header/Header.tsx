import { TopBar } from '..'
import * as S from './style'
import { Logo } from '../../img'
import { useState } from 'react'
import { CiSearch, CiUser, CiShoppingBasket } from 'react-icons/ci'
import { IoCloseOutline } from 'react-icons/io5'
import { SearchInput } from '../inputs'
import mock from './mock.json'

export const Header = () => {
  const [search, setSearch] = useState<boolean>(false)
  const [list, setList] = useState<boolean>(false)

  const header = ['Marcas', 'Tênis', 'Roupas', 'Acessórios', 'Skate']

  return (
    <S.Header>
      <S.TopBox>
        <TopBar />
        <S.MainBox>
          <button>
            <S.Logo src={Logo} />
          </button>
          {search ? (
            <S.SearchBox>
              <SearchInput />
              <button onClick={() => setSearch(false)}>
                <IoCloseOutline size={28} style={{ marginTop: '5px' }} />
              </button>
            </S.SearchBox>
          ) : (
            <S.Navigation>
              <S.List>
                {header.map((item) => (
                  <li
                    onMouseEnter={() => setList(true)}
                    onMouseLeave={() => setList(false)}
                  >
                    {item}
                  </li>
                ))}
              </S.List>
            </S.Navigation>
          )}
          <S.Menu>
            <button onClick={() => setSearch((search) => !search)}>
              <CiSearch size={28} />
            </button>
            <button>
              <CiUser size={28} />
            </button>
            <button>
              <CiShoppingBasket size={28} />
            </button>
          </S.Menu>
        </S.MainBox>
      </S.TopBox>
      {list ? (
        <S.BottomBox
          onMouseEnter={() => setList(true)}
          onMouseLeave={() => setList(false)}
        >
          {Object.values(mock).map((col) => (
            <S.Column>
              {col.map((option) => (
                <li>
                  <button>{option}</button>
                </li>
              ))}
            </S.Column>
          ))}
        </S.BottomBox>
      ) : (
        <></>
      )}
    </S.Header>
  )
}
