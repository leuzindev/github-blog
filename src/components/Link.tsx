import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

interface LinkProps{
  label: string
  to?: any
}

export function Link({ label, to } : LinkProps) {
  return (
    <NavLink to={to} className=" flex items-center justify-center gap-2 w-14 hover:border-b border-blue">
      <span className="text-blue text-xs font-bold">{label.toUpperCase()}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-blue text-xs"/>
    </NavLink>
  )
}
