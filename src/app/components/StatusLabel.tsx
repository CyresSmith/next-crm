import { CompanyStatus } from '@/lib/api';
import clsx from 'clsx';

type Props = { status: CompanyStatus; disabled?: boolean };

const labelByStatus = {
    [CompanyStatus.Active]: 'Active',
    [CompanyStatus.NotActive]: 'Not Active',
    [CompanyStatus.Pending]: 'Pending',
    [CompanyStatus.Suspended]: 'Suspended',
};

const StatusLabel = ({ status, disabled = false }: Props) => {
    return (
        <div
            className={clsx(
                `inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium`,
                {
                    ['opacity-75 cursor-not-allowed']: disabled,
                    ['text-green-700 bg-green-100']: status === CompanyStatus.Active,
                    ['text-red-700 bg-red-100']: status === CompanyStatus.NotActive,
                    ['text-orange-700 bg-orange-100']: status === CompanyStatus.Pending,
                    ['text-blue-700 bg-blue-100']: status === CompanyStatus.Suspended,
                },
            )}
        >
            <div className="w-1 h-1 mr-2 rounded-full bg-current" />
            {labelByStatus[status]}
        </div>
    );
};

export default StatusLabel;
