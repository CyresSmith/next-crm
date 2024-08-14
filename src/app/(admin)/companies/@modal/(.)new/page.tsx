'use client';

import CompanyForm from '@/app/components/CompanyFormModal/CompanyForm';
import Modal from '@/app/components/Modal';
import { useRouter } from 'next/navigation';

export interface PageProps {}

export default function Page({}: PageProps) {
    const router = useRouter();
    return (
        <Modal show={true} onClose={() => router.back()}>
            <CompanyForm onSubmit={console.log} />
        </Modal>
    );
}
