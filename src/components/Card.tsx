import { ReactNode } from 'react'

interface CardProps {
  className?: string
  children?: ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={`${className} max-h-[260px] w-[416px] rounded-[10px] border-base-post bg-base-post p-8 text-base-text hover:border-base-label`}
    >
      {children}
    </div>
  )
}
