import { AnimatePresence } from 'framer-motion'
import * as S from './style'

interface MenuButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export const MenuButton = ({ onClick, children }: MenuButtonProps) => {
  return (
    <AnimatePresence>
      <S.MenuButton
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        exit={{ scale: 1 }}
        onClick={onClick}
      >
        {children}
      </S.MenuButton>
    </AnimatePresence>
  )
}
