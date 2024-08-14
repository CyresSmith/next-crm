import DashboardCard from '@/app/components/DashboardCard';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableCell from '@/app/components/SummaryTable/SummaryTableCell';
import SummaryTableHeader from '@/app/components/SummaryTable/SummaryTableHeader';
import { getSummaryPromotions } from '@/lib/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
    const data = await getSummaryPromotions();

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
                {data.map(({ promotionId, promotionName, companyTitle, discount }) => (
                    <tr key={promotionId}>
                        <SummaryTableCell>{companyTitle}</SummaryTableCell>
                        <SummaryTableCell>{promotionName}</SummaryTableCell>
                        <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
                    </tr>
                ))}
            </SummaryTable>
        </DashboardCard>
    );
}
