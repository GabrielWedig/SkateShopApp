import { AnimatePresence, motion } from 'framer-motion'

interface ZoomAnimationProps {
  children: React.ReactNode
}

export const ZoomAnimation = ({ children }: ZoomAnimationProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        exit={{ scale: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
