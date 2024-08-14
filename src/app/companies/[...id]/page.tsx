import Header from '@/app/components/Header';

type Props = {
    params: { id: string };
};

const Page = ({ params }: Props) => {
    return (
        <>
            <Header>Company {params.id}</Header>
        </>
    );
};

export default Page;
