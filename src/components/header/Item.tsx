import { useState } from 'react'
import { Visible } from '..'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import * as S from './style'

interface ItemProps {
  column: Column
}

interface Column {
  header: string
  categories: string[]
}

export const Item = ({ column }: ItemProps) => {
  const [openCategories, setOpenCategories] = useState<boolean>(false)

  return (
    <>
      <S.ItemRow onClick={() => setOpenCategories((op) => !op)}>
        <span>{column.header}</span>
        {openCategories ? <IoMdRemove size={20} /> : <IoMdAdd size={20} />}
      </S.ItemRow>
      <Visible when={openCategories}>
        {column.categories.map((option) => (
          <S.ItemRow>
            <button>{option}</button>
          </S.ItemRow>
        ))}
      </Visible>
    </>
  )
}
