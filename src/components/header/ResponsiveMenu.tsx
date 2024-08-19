import { AnimatePresence } from 'framer-motion'
import * as S from './style'
import content from './content.json'
import { Item } from './Item'
import { IoCloseOutline } from 'react-icons/io5'

interface ResponsiveMenuProps {
  visible: boolean
  close: () => void
}

export const ResponsiveMenu = ({ visible, close }: ResponsiveMenuProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <S.ResponsiveMenu
          initial={{ left: window.innerWidth }}
          animate={{ left: 0 }}
          exit={{ left: window.innerWidth }}
        >
          <S.CloseBox>
            <button onClick={close}>
              <IoCloseOutline size={28} />
            </button>
          </S.CloseBox>
          {content.map((col) => (
            <Item column={col} />
          ))}
        </S.ResponsiveMenu>
      )}
    </AnimatePresence>
  )
}
