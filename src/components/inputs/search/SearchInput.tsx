import * as S from './style'
import { CiSearch } from 'react-icons/ci'
//import { Control, FieldValues, Path, useController } from 'react-hook-form'
import { Option } from '../../../hooks'
import { ChangeEvent, useState } from 'react'
import { Visible } from '../..'

interface SearchInputProps {
  //<TFieldValues extends FieldValues> {
  // name: Path<TFieldValues>
  // control: Control<TFieldValues>

  onSearch: (term: string) => Promise<Option[]> | void
  hasOptions?: boolean
  onSelect?: (id: string) => void
  //onChange?: (serchTerm: string) => void
}

export const SearchInput = ({
  //<TFieldValues extends FieldValues = FieldValues>({
  // name,
  // control,
  onSearch,
  hasOptions = true,
  onSelect
}: SearchInputProps) => {
  //SearchInputProps<TFieldValues>) => {
  const [options, setOptions] = useState<Option[]>()
  const [value, setValue] = useState<string>()

  // const { field } = useController({ name, control })

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const options = await onSearch?.call(null, value)

    if (hasOptions && options) {
      setOptions(options)
      setValue(value)
    }
  }

  const handleSelect = (option: Option) => {
    setValue(option.value)
    onSelect?.call(null, option.id)
    setOptions([])
  }

  return (
    <S.SearchInput>
      <S.InputBox>
        <input
          type="text"
          placeholder="Pesquisar"
          //name={name}
          value={value}
          onChange={handleChange}
        />
        <button>
          <CiSearch size={25} />
        </button>
      </S.InputBox>
      <Visible when={hasOptions && options?.length !== 0}>
        <S.OptionsBox>
          {options?.map((option) => (
            <li key={option.id}>
              <button onClick={() => handleSelect(option)}>
                {option.value}
              </button>
            </li>
          ))}
        </S.OptionsBox>
      </Visible>
    </S.SearchInput>
  )
}
