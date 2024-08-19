import { AnimatePresence } from 'framer-motion'
import content from './content.json'
import * as S from './style'

interface MenuProps {
  visible: boolean
  open: () => void
  close: () => void
}

export const Menu = ({ visible, open, close }: MenuProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <S.Menu
          initial={{ opacity: 0, top: 0 }}
          animate={{ opacity: 1, top: 140 }}
          exit={{ opacity: 0, top: 0 }}
          onMouseEnter={open}
          onMouseLeave={close}
        >
          {content.map((col) => (
            <S.Column>
              {col.categories.map((option) => (
                <li>
                  <button>{option}</button>
                </li>
              ))}
            </S.Column>
          ))}
        </S.Menu>
      )}
    </AnimatePresence>
  )
}
