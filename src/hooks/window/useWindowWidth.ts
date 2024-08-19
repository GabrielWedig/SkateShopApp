import { useEffect, useState } from 'react'

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => setWindowWidth(window.innerWidth)

  //const isDesktop = windowWidth > 700
  const w1000 = windowWidth < 1000

  return { w1000 }
}
