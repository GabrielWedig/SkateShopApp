import { TopBarMessageData, useRequest } from '..'

export const useTopBarMessages = () => {
  const { get } = useRequest('top-bar')

  const getMessages = async (): Promise<TopBarMessageData[]> => {
    const { data } = await get()
    return data
  }

  const getMessageById = async (id: string): Promise<TopBarMessageData> => {
    const { data } = await get(id)
    return data
  }

  return {
    getMessages,
    getMessageById
  }
}
