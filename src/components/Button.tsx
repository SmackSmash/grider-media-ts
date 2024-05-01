import { type PropsWithChildren, type ComponentPropsWithoutRef } from 'react';
import className from 'classnames';
import { ImSpinner2 } from 'react-icons/im';

type ButtonProps = PropsWithChildren<{
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  loading?: boolean;
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
  loading,
  ...rest
}: ButtonProps) {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 h-10 w-40 justify-center brightness-90 hover:brightness-100',
    {
      'border-poimandres-midslate bg-poimandres-midslate text-poimandres-white':
        primary,
      'border-poimandres-midblue bg-poimandres-midblue text-poimandres-blackslate':
        secondary,
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
    }
  );

  return (
    <button disabled={loading} className={classes} {...rest}>
      {loading ? <ImSpinner2 className='animate-spin' /> : children}
    </button>
  );
}

export default Button;
