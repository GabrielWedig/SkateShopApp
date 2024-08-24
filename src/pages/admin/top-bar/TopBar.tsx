import { useEffect, useState } from 'react'
import { SectionBase } from '..'
import {
  TopBarMessageData,
  useTopBarMessages,
  useTryCatch
} from '../../../hooks'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'
import { Button, TextInput } from '../../../components'

interface FormData {
  message: string
}

export const TopBar = () => {
  const [messages, setMessages] = useState<TopBarMessageData[]>([])
  const [messageId, setMessageId] = useState<string>('')

  const header = ['Mensagem']
  const isNew = !messageId

  const { getAndSet, callApi } = useTryCatch()
  const { getMessages, getMessageById } = useTopBarMessages()

  useEffect(() => {
    getAndSet(getMessages(), setMessages)
  }, [])

  useEffect(() => {
    if (!isNew) {
      populateFields()
    }
  }, [isNew])

  const populateFields = async () => {
    const { success, data } = await callApi(getMessageById(messageId))

    if (success && data) {
      reset({
        message: data.message
      })
    }
  }

  const schema = yup.object().shape({
    message: yup.string().required()
  })

  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const handleNewSubmit = async (values: FieldValues) => {
    console.log('new!', values)
  }

  const handleEditSubmit = async (values: FieldValues) => {
    console.log('edit!', values)
  }

  return (
    <SectionBase
      title="Top Bar"
      header={header}
      onNew={() => setMessageId('')}
      onEdit={(id) => setMessageId(id)}
      onDelete={(id) => console.log('delete', id)}
      content={messages}
    >
      <form onSubmit={handleSubmit(isNew ? handleNewSubmit : handleEditSubmit)}>
        <TextInput control={control} name="message" label="Mensagem" />
        <Button variant="primary">{isNew ? 'Criar' : 'Editar'}</Button>
      </form>
    </SectionBase>
  )
}
