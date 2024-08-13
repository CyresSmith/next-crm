'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
}

const Button = ({ disabled, ...rest }: Props) => {
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
            Button
        </button>
    );
};

export default Button;
