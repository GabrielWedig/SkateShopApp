import { useState } from 'react'
import { Pagination, SearchInput, Visible } from '../../../components'
import { Paged } from '../../../hooks'
import * as S from './style'
import { MdEdit, MdDelete } from 'react-icons/md'

interface SectionBaseProps {
  id: string
  title: string
  header: string[]
  content: Paged<Item>
  children: React.ReactNode
  fetch: (searchTerm?: string, page?: number) => void
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
}

type Item = {
  id: string
  [key: string]: any
}

export const SectionBase = ({
  id,
  title,
  header,
  content,
  children,
  onEdit,
  onDelete,
  fetch
}: SectionBaseProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm)
    fetch(searchTerm, 1)
  }

  const columnSize = 100 / header.length

  return (
    <S.Section id={id}>
      <S.TableBox>
        <h2>{title}</h2>
        <SearchInput hasOptions={false} onSearch={handleSearch} />
        <S.Table>
          <S.Header columnSize={columnSize}>
            {header.map((column, i) => (
              <span key={i}>{column}</span>
            ))}
          </S.Header>
          {content.items.map((item) => (
            <S.Item key={item.id} columnSize={columnSize}>
              {Object.values(item)
                .slice(1)
                .map((column, i) => (
                  <span key={i}>{column}</span>
                ))}
              <div>
                <Visible when={!!onEdit}>
                  <button onClick={() => onEdit && onEdit(item.id)}>
                    <MdEdit size={20} />
                  </button>
                </Visible>
                <Visible when={!!onDelete}>
                  <button onClick={() => onDelete && onDelete(item.id)}>
                    <MdDelete size={20} />
                  </button>
                </Visible>
              </div>
            </S.Item>
          ))}
        </S.Table>
        <Pagination
          size={content.size}
          total={content.total}
          onChange={(page) => fetch(searchTerm, page)}
        />
      </S.TableBox>
      {children}
    </S.Section>
  )
}
