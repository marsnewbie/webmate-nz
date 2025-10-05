import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../../utils/cn'

const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    <div ref={dropdownRef} className="relative inline-block text-left">
      {React.Children.map(children, child => {
        if (child.type.displayName === 'DropdownMenuTrigger') {
          return React.cloneElement(child, { 
            onClick: () => setIsOpen(!isOpen),
            'data-open': isOpen
          })
        }
        if (child.type.displayName === 'DropdownMenuContent') {
          return React.cloneElement(child, { 
            isOpen,
            onClose: () => setIsOpen(false)
          })
        }
        return child
      })}
    </div>
  )
}

const DropdownMenuTrigger = React.forwardRef(({ asChild, children, onClick, ...props }, ref) => {
  if (asChild) {
    return React.cloneElement(children, { ...props, ref, onClick })
  }
  return (
    <button ref={ref} onClick={onClick} {...props}>
      {children}
    </button>
  )
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuContent = React.forwardRef(({ className, children, isOpen, onClose, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
        isOpen ? "block" : "hidden",
        className
      )}
      {...props}
    >
      {React.Children.map(children, child => {
        if (child.type.displayName === 'DropdownMenuItem') {
          return React.cloneElement(child, { 
            onClick: (e) => {
              child.props.onClick?.(e)
              onClose?.()
            }
          })
        }
        return child
      })}
    </div>
  )
})
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef(({ className, children, onClick, ...props }, ref) => (
  <button
    ref={ref}
    onClick={onClick}
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
