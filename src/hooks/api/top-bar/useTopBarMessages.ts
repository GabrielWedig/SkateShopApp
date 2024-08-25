import {
  CreateTopBarMessageRequest,
  Paged,
  TopBarMessageData,
  UpdateTopBarMessageRequest,
  useRequest
} from '..'

export const useTopBarMessages = () => {
  const { get, post, put, del } = useRequest('top-bar')

  const getTopBarMessages = async (
    searchTerm: string
  ): Promise<Paged<TopBarMessageData>> => {
    const { data } = await get(`?searchTerm=${searchTerm}`)
    return data
  }

  const getTopBarMessageById = async (
    id: string
  ): Promise<TopBarMessageData> => {
    const { data } = await get(id)
    return data
  }

  const createTopBarMessage = async (
    request: CreateTopBarMessageRequest
  ): Promise<void> => {
    await post('', request)
  }

  const updateTopBarMessage = async (
    id: string,
    request: UpdateTopBarMessageRequest
  ): Promise<void> => {
    await put(id, request)
  }

  const deleteTopBarMessage = async (id: string): Promise<void> => {
    await del(id)
  }

  return {
    getTopBarMessages,
    getTopBarMessageById,
    createTopBarMessage,
    updateTopBarMessage,
    deleteTopBarMessage
  }
}
