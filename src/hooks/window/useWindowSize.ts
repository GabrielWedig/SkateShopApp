import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () =>
    setWindowSize((size) => ({
      ...size,
      width: window.innerWidth,
      height: window.innerHeight
    }))

  const w1200 = windowSize.width < 1200
  const windowHeight = windowSize.height
  const windowWidth = windowSize.width

  return { w1200, windowHeight, windowWidth }
}
