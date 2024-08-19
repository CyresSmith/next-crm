'use client';

import { Company, CompanyStatus, createCompany } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import Button from '../Button';
import InputField from '../InputField';
import LogoUploader from '../LogoUploader';

export type CompanyFieldValues = {
    name: string;
    status: string;
    country: string;
    category: string;
    date: string;
    description: string;
};

const initialValues: CompanyFieldValues = {
    name: '',
    status: '',
    country: '',
    category: '',
    date: '',
    description: '',
};

export interface Props {
    onSubmit?: () => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: Props) {
    const queryClient = useQueryClient();

    const { mutateAsync, isPending } = useMutation({
        mutationFn: createCompany,
        onSuccess: (data) => {
            queryClient.setQueryData(['companies'], (prev: Company[]) => {
                if (prev) {
                    return prev.concat(data);
                } else {
                    return data;
                }
            });
        },
    });

    const handleSubmit = async (values: CompanyFieldValues) => {
        await mutateAsync({
            ...values,
            title: values.name,
            joinedDate: values.date,
            status: CompanyStatus.Active,
            categoryId: '1',
            categoryTitle: values.category,
            countryId: '1',
            countryTitle: values.country,
        });

        onSubmit && onSubmit();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="flex flex-col gap-10">
                <p className="mb-0.5 text-xl">Add new company</p>

                <div className="flex gap-6">
                    <div className="flex flex-col flex-1 gap-5">
                        <LogoUploader label="Logo" placeholder="Upload photo" />
                        <InputField label="Status" placeholder="Status" name="status" />
                        <InputField label="Country" placeholder="Country" name="country" />
                    </div>

                    <div className="flex flex-col flex-1 gap-5">
                        <InputField label="Name" placeholder="Name" name="name" />
                        <InputField label="Category" placeholder="Category" name="category" />
                        <InputField label="Joined date" type="date" name="date" />
                        <InputField
                            label="Description"
                            placeholder="Description"
                            name="description"
                        />
                    </div>
                </div>

                <Button type="submit">Add company</Button>
            </Form>
        </Formik>
    );
}
