import { type PropsWithChildren, type ComponentPropsWithoutRef } from 'react';
import className from 'classnames';

type ButtonProps = PropsWithChildren<{
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
}> &
  ComponentPropsWithoutRef<'button'>;

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}: ButtonProps) {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-poimandres-midslate bg-poimandres-midslate text-poimandres-white':
        primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger
    }
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
