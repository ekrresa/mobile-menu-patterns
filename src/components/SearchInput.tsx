import * as React from 'react'
import { Search } from 'lucide-react'

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export function SearchInput(props: Props) {
  const { onChange } = props

  return (
    <div className="flex items-center gap-2 overflow-hidden rounded border bg-white pl-3 pr-2">
      <Search
        aria-hidden
        className="text-xl text-baltic-500"
        size={20}
        strokeWidth={1.5}
      />

      <input
        aria-label="Search names and phone numbers"
        className="flex-1 py-2 font-normal text-baltic-700 placeholder:text-sm focus:outline-none"
        onChange={onChange}
        placeholder="Search names and phone numbers"
        autoFocus
      />
    </div>
  )
}
