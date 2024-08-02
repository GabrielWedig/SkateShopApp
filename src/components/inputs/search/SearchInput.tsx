import * as S from './style'
import { CiSearch } from 'react-icons/ci'

export const SearchInput = () => {
  return (
    <S.SearchInput>
      <input type="text" />
      <button>
        <CiSearch size={25}/>
      </button>
    </S.SearchInput>
  )
}
