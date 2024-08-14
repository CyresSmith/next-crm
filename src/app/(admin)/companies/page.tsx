import CompanyRow from '@/app/components/CompanyTable/CompanyRow';
import CompanyTable from '@/app/components/CompanyTable/CompanyTable';
import { Status } from '@/app/components/StatusLabel';

const Page = () => {
    return (
        <CompanyTable>
            <CompanyRow
                id={1}
                category={'Products'}
                company={'Costco'}
                country={'USA'}
                joinedDate={'02.19.2023'}
                promotion={true}
                status={Status.Pending}
            />
        </CompanyTable>
    );
};

export default Page;
