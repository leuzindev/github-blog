import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link'

interface LinkToProps {
  label: string
  to?: any
}

export function LinkTo({ label, to }: LinkToProps) {
  return (
    <Link
      href={to}
      className="flex h-[19px] items-center justify-center gap-2 border-blue hover:border-b"
    >
      <span className="text-xs font-bold text-blue">{label.toUpperCase()}</span>
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className="text-xs text-blue"
      />
    </Link>
  )
}
