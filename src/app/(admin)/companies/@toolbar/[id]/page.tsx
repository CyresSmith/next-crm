import AddPromotionButton from '@/app/components/AddPromotionButton';
import SearchInput from '@/app/components/SearchInput';
import Toolbar from '@/app/components/Toolbar';

export interface PageProps {
    params: { id: string };
}

export default function Page({ params }: PageProps) {
    return (
        <Toolbar action={<AddPromotionButton companyId={params.id} />}>
            <SearchInput />
        </Toolbar>
    );
}
