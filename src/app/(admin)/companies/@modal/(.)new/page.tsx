'use client';

import CompanyFormModal from '@/app/components/CompanyFormModal';
import { useRouter } from 'next/navigation';

export interface PageProps {}

export default function Page({}: PageProps) {
    const router = useRouter();
    return <CompanyFormModal show={true} onClose={() => router.back()} />;
}
