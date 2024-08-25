import { SearchInput, Visible } from '../../../components'
import * as S from './style'
import { MdEdit, MdDelete } from 'react-icons/md'

interface SectionBaseProps {
  id: string
  title: string
  header: string[]
  content: Item[]
  children: React.ReactNode
  onSearch: (searchTerm: string) => void
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
  onSearch
}: SectionBaseProps) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <S.TableBox>
        <S.Table>
          <SearchInput hasOptions={false} onSearch={onSearch} />
          <S.Header columnSize={100 / (header.length + 1)}>
            {header.map((column, i) => (
              <span key={i}>{column}</span>
            ))}
          </S.Header>
          <S.Content>
            {content.map((item) => (
              <S.Item key={item.id} columnSize={100 / (header.length + 1)}>
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
          </S.Content>
        </S.Table>
        {children}
      </S.TableBox>
    </section>
  )
}
