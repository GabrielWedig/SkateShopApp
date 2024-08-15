import { AnimatePresence } from 'framer-motion'
import content from './content.json'
import * as S from './style'

interface BottomBoxProps {
  visible: boolean
  open: () => void
  close: () => void
}

export const BottomBox = ({ visible, open, close }: BottomBoxProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <S.BottomBox
          initial={{ opacity: 0, top: 0 }}
          animate={{ opacity: 1, top: 160 }}
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
        </S.BottomBox>
      )}
    </AnimatePresence>
  )
}
