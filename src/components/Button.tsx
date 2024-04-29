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
  const classes = className(rest.className, 'flex items-center px-3 py-1.5', {
    'border-poimandres-midslate bg-poimandres-midslate text-poimandres-white':
      primary,
    'border-poimandres-darkslate bg-poimandres-darkslate text-white': secondary,
    'border-poimandres-lightgreen bg-poimandres-lightgreen text-poimandres-blackslate':
      success,
    'border-poimandres-yellow bg-poimandres-yellow text-poimandres-blackslate':
      warning,
    'border-poimandres-darkpink bg-poimandres-darkpink text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger
  });

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
