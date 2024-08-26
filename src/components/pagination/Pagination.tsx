import { Pagination as MuiPagination, Stack } from '@mui/material'
import { useState } from 'react'
import { Visible } from '..'

interface PaginationProps {
  total: number
  size: number
  onChange: (page: number) => void
}

export const Pagination = ({
  total,
  size,
  onChange
}: PaginationProps) => {
  const [page, setPage] = useState<number>(1)

  const handleChange = (page: number) => {
    setPage(page)
    onChange(page)
  }

  const count = Math.floor(total / size) + 1

  return (
    <Visible when={total > size}>
      <Stack spacing={2}>
        <MuiPagination
          count={count}
          page={page}
          onChange={(_, page) => handleChange(page)}
        />
      </Stack>
    </Visible>
  )
}
