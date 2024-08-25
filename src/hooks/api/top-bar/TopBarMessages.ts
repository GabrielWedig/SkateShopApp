export interface TopBarMessageData {
  id: string
  message: string
}

export interface CreateTopBarMessageRequest {
  message: string
}

export type UpdateTopBarMessageRequest = Partial<CreateTopBarMessageRequest>
