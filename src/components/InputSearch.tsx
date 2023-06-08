interface InputSearchProps {
  placeholder?: string
}

export function InputSearch({ placeholder }: InputSearchProps) {
  return (
    <input
      type="text"
      className="h-[50px] w-full rounded-md border border-base-border bg-base-input p-4 text-base-text transition-colors placeholder:text-base-label focus:border-blue"
      placeholder={placeholder || 'Buscar conteúdo'}
    />
  )
}
