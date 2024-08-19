import { Company } from '@/lib/api';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import StatusLabel from '../StatusLabel';

export interface CompanyRowProps {
    company: Company;
}

export default function CompanyRow({
    company: { id, categoryTitle, countryTitle, hasPromotions, joinedDate, status, title },
}: CompanyRowProps) {
    return (
        <tr className="h-14 text-center text-gray-900 bg-white">
            <td className="text-xs font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
                {categoryTitle}
            </td>
            <td>
                <Link href={`/companies/${id}`}>{title}</Link>
            </td>
            <td>
                <StatusLabel status={status} />
            </td>
            <td>
                <div className="inline-flex items-center gap-1">
                    <Image
                        width={16}
                        height={16}
                        src={`/icons/${hasPromotions ? 'check' : 'x-mark'}.svg`}
                        alt="promotion icon"
                    />
                    <span
                        className={clsx(
                            'text-sm font-medium',
                            hasPromotions ? 'text-green-700' : 'text-red-700',
                        )}
                    >
                        {hasPromotions ? 'Yes' : 'No'}
                    </span>
                </div>
            </td>
            <td>{countryTitle}</td>
            <td className="rounded-r">{new Date(joinedDate).toLocaleDateString('uk-UA')}</td>
        </tr>
    );
}
