import AddCompanyButton from '@/app/components/AddCompanyButton';
import SearchInput from '@/app/components/SearchInput';
import Toolbar from '@/app/components/Toolbar';

export interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <Toolbar action={<AddCompanyButton />}>
            <SearchInput />
        </Toolbar>
    );
}
