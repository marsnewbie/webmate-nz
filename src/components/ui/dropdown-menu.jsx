import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../../utils/cn'

const DropdownMenu = ({ children }) => {
  return <div className="relative inline-block text-left">{children}</div>
}

const DropdownMenuTrigger = React.forwardRef(({ asChild, children, ...props }, ref) => {
  if (asChild) {
    return React.cloneElement(children, { ...props, ref })
  }
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  )
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div
      ref={contentRef}
      className={cn(
        "absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
        isOpen ? "block" : "hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
      className
    )}
    {...props}
  >
    {children}
  </button>
))
DropdownMenuItem.displayName = "DropdownMenuItem"

export { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger }
