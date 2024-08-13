import { clsx } from 'clsx';
import { ReactNode } from 'react';

export enum Status {
    Active = 'active',
    NotActive = 'notActive',
    Pending = 'pending',
    Suspended = 'suspended',
}

type Props = { children: ReactNode; status: Status; disabled?: boolean };

const StatusLabel = ({ children, status, disabled = false }: Props) => {
    return (
        <div
            className={clsx(
                `inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium`,
                {
                    ['opacity-75 cursor-not-allowed']: disabled,
                    ['text-green-700 bg-green-100']: status === Status.Active,
                    ['text-red-700 bg-red-100']: status === Status.NotActive,
                    ['text-orange-700 bg-orange-100']: status === Status.Pending,
                    ['text-blue-700 bg-blue-100']: status === Status.Suspended,
                },
            )}
        >
            <div className="w-1 h-1 mr-2 rounded-full bg-current" />
            {children}
        </div>
    );
};

export default StatusLabel;
