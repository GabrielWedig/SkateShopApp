import { TopBarMessageData, useRequest } from '..'

export const useTopBarMessages = () => {
  const { get } = useRequest('top-bar')

  const getMessages = async (): Promise<TopBarMessageData[]> => {
    const { data } = await get()
    return data
  }

  return {
    getMessages
  }
}
