'use client';

import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
    params: { id: string };
};

const Page = ({ params }: Props) => {
    useEffect(() => {
        const id = Number.parseInt(params.id);

        if (Number.isNaN(id)) notFound();
    }, [params.id]);

    return (
        <>
            <Header>Company {params.id}</Header>
        </>
    );
};

export default Page;
