import { Button, Visible } from '../../../components'
import * as S from './style'
import { MdEdit, MdDelete } from 'react-icons/md'

interface SectionBaseProps {
  title: string
  header: string[]
  content: Item[]
  children: React.ReactNode
  onNew?: () => void
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
}

type Item = {
  id: string
  [key: string]: any
}

export const SectionBase = ({
  title,
  header,
  content,
  children,
  onNew,
  onEdit,
  onDelete
}: SectionBaseProps) => {
  return (
    <S.Section>
      <S.TableBox>
        <div>
          <h2>{title}</h2>
          <Visible when={!!onNew}>
            <Button variant="primary" onClick={onNew}>
              Novo
            </Button>
          </Visible>
        </div>
        <S.Table>
          <S.Header size={header.length}>
            {header.map((column, i) => (
              <span key={i}>{column}</span>
            ))}
          </S.Header>
          <S.Content size={header.length}>
            {content.map((item) => (
              <S.Item key={item.id}>
                {Object.values(item)
                  .slice(1)
                  .map((column, i) => (
                    <span key={i}>{column}</span>
                  ))}
                <Visible when={!!onEdit}>
                  <button onClick={() => onEdit && onEdit(item.id)}>
                    <MdEdit />
                  </button>
                </Visible>
                <Visible when={!!onDelete}>
                  <button onClick={() => onDelete && onDelete(item.id)}>
                    <MdDelete />
                  </button>
                </Visible>
              </S.Item>
            ))}
          </S.Content>
        </S.Table>
      </S.TableBox>
      {children}
    </S.Section>
  )
}
