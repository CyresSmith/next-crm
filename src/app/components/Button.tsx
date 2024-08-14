'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    children?: ReactNode;
}

const Button = ({ disabled, children, ...rest }: Props) => {
    return (
        <button
            {...rest}
            className={clsx(
                'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
                {
                    ['hover:bg-gray-800 active:bg-gray-950']: !disabled,
                    ['text-zinc-100']: disabled,
                },
            )}
        >
            {children ? children : 'Button'}
        </button>
    );
};

export default Button;
