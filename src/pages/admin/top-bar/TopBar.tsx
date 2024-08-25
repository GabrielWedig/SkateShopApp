import { useEffect, useState } from 'react'
import { SectionBase } from '..'
import {
  Paged,
  TopBarMessageData,
  useTopBarMessages,
  useTryCatch
} from '../../../hooks'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'
import { Button, TextInput, Visible } from '../../../components'

interface FormData {
  message: string
}

export const TopBar = () => {
  const [messages, setMessages] = useState<Paged<TopBarMessageData>>()
  const [messageId, setMessageId] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const header = ['Mensagem']
  const isNew = !messageId

  const { getAndSet, callApi } = useTryCatch()
  const {
    getTopBarMessages,
    getTopBarMessageById,
    createTopBarMessage,
    updateTopBarMessage,
    deleteTopBarMessage
  } = useTopBarMessages()

  useEffect(() => {
    fetchMessages()
  }, [searchTerm])

  const fetchMessages = () => getAndSet(getTopBarMessages(searchTerm), setMessages)

  useEffect(() => {
    if (!isNew) {
      populateFields()
    }
  }, [messageId])

  const populateFields = async () => {
    const { success, data } = await callApi(getTopBarMessageById(messageId))

    if (success && data) {
      setValue('message', data.message)
    }
  }

  const schema = yup.object().shape({
    message: yup.string().required('Obrigatório.')
  })

  const { control, handleSubmit, reset, setValue } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const handleEditSubmit = async (values: FieldValues) => {
    const request = {
      message: values.message
    }

    const { success } = await callApi(updateTopBarMessage(messageId, request))

    if (success) {
      fetchMessages()
      reset()
    }
  }

  const handleNewSubmit = async (values: FieldValues) => {
    const request = {
      message: values.message
    }

    const { success } = await callApi(createTopBarMessage(request))

    if (success) {
      fetchMessages()
      reset()
    }
  }

  const handleDelete = async (id: string) => {
    const { success } = await callApi(deleteTopBarMessage(id))

    if (success) {
      fetchMessages()
    }
  }

  const handleClickNew = () => {
    reset()
    setMessageId('')
  }

  return (
    <SectionBase
      id="top-bar"
      title="Top Bar"
      header={header}
      onEdit={(id) => setMessageId(id)}
      onDelete={(id) => handleDelete(id)}
      content={messages?.items ?? []}
      onSearch={(searchTerm) => setSearchTerm(searchTerm)}
    >
      <form onSubmit={handleSubmit(isNew ? handleNewSubmit : handleEditSubmit)}>
        <TextInput control={control} name="message" label="Mensagem" />
        <div className="buttons">
          <Button variant="primary">Enviar</Button>
          <Visible when={!isNew}>
            <Button variant="primary" onClick={handleClickNew}>
              Novo
            </Button>
          </Visible>
        </div>
      </form>
    </SectionBase>
  )
}
