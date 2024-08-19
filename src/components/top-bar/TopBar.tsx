import * as S from './style'
import { useEffect, useState } from 'react'
import {
  TopBarMessageData,
  useTopBarMessages,
  useTryCatch
} from '../../hooks'
import { Slider } from './Slider'

export const TopBar = () => {
  const [messages, setMessages] = useState<TopBarMessageData[]>([])

  const { getAndSet } = useTryCatch()
  const { getMessages } = useTopBarMessages()

  useEffect(() => {
    getAndSet(getMessages(), setMessages)
  }, [])

  return (
    <S.TopBar>
      <Slider messages={messages} />
      <Slider messages={messages} />
    </S.TopBar>
  )
}
