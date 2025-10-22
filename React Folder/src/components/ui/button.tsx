import * as React from 'react'

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'default' | 'ghost' | 'secondary'
  size?: 'default' | 'icon'
  asChild?: boolean
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: ButtonProps) {
  // Base classes controlled by Button props; exclude incoming className here
  const baseClasses = [
    'inline-flex items-center justify-center',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    size === 'icon' ? 'h-9 w-9' : 'h-9 px-4 py-2',
    variant === 'ghost' ? 'bg-transparent' : '',
    variant === 'secondary' ? 'bg-neutral-800 text-white' : '',
  ]
    .filter(Boolean)
    .join(' ')

  if (asChild) {
    // Render child element but pass computed className and props along
    const { children, className: userClassName, ...rest } = props as any
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: [baseClasses, userClassName, className].filter(Boolean).join(' '),
        ...rest,
      })
    }
  }

  // Combine base classes with user-provided className
  const finalClassName = [baseClasses, className].filter(Boolean).join(' ')

  return (
    <button
      className={finalClassName}
      {...props}
    />
  )
}

export default Button