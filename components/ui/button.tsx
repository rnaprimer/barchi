"use client"

import type React from "react"

import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  children: React.ReactNode
  className?: string
}

export default function Button({ children, onClick, primary, className = "", ...props }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2
        ${primary ? "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500" : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400"}
        ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
