import DashboardCard from '@/app/components/DashboardCard';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableCell from '@/app/components/SummaryTable/SummaryTableCell';
import SummaryTableHeader from '@/app/components/SummaryTable/SummaryTableHeader';
import { getPromotions } from '@/lib/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
    const data = await getPromotions();

    return (
        <DashboardCard label="Promotions">
            <SummaryTable
                headers={
                    <>
                        <SummaryTableHeader>Company</SummaryTableHeader>
                        <SummaryTableHeader>Name</SummaryTableHeader>
                        <SummaryTableHeader align="center">%</SummaryTableHeader>
                    </>
                }
            >
                {data.map(({ id, title, companyTitle, discount }) => (
                    <tr key={id}>
                        <SummaryTableCell>{companyTitle}</SummaryTableCell>
                        <SummaryTableCell>{title}</SummaryTableCell>
                        <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
                    </tr>
                ))}
            </SummaryTable>
        </DashboardCard>
    );
}
