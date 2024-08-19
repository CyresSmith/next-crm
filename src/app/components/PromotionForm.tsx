'use client';

import { createPromotion, getCompany, Promotion } from '@/lib/api';
import { Button } from '@headlessui/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import InputField from './InputField';
import LogoUploader from './LogoUploader';

export type PromotionFieldValues = {
    title: string;
    description: string;
    discount: string | number;
};

const initialValues: PromotionFieldValues = {
    title: '',
    description: '',
    discount: '',
};

export interface PromotionFormProps {
    companyId: string;
    onSubmit?: (values: PromotionFieldValues) => void | Promise<void>;
}

export default function PromotionForm({ companyId, onSubmit }: PromotionFormProps) {
    const queryClient = useQueryClient();

    const { data: company } = useQuery({
        queryKey: ['companies', companyId],
        queryFn: () => getCompany(companyId),
        staleTime: 10 * 1000,
        enabled: Boolean(companyId),
    });

    const { mutateAsync, isPending } = useMutation({
        mutationFn: createPromotion,
        onSuccess: (data) => {
            queryClient.setQueryData(
                ['promotions', companyId],
                (prev: Promotion[] = []) => prev.concat(data),
                // prev ? prev.concat(data) : data,
            );

            queryClient.setQueryData(
                ['promotions'],
                (prev: Promotion[] = []) => prev.concat(data),
                // prev ? prev.concat(data) : data,
            );

            // queryClient.invalidateQueries({
            //     queryKey: ['promotions', companyId],
            // });

            // queryClient.invalidateQueries({
            //     queryKey: ['promotions'],
            //     exact: true,
            // });
        },
    });

    const handleSubmit = async (values: PromotionFieldValues) => {
        if (company) {
            await mutateAsync({
                ...values,
                discount: Number(values.discount) || 0,
                companyId: company.id,
                companyTitle: company.title,
            });
        }

        if (onSubmit) onSubmit(values);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="flex flex-col gap-10">
                <p className="mb-0.5 text-xl">Add new promotion</p>
                <div className="flex flex-col gap-5">
                    <InputField required label="Title" placeholder="Title" name="title" />
                    <InputField
                        required
                        label="Description"
                        placeholder="Description"
                        name="description"
                    />
                    <InputField
                        required
                        type="number"
                        label="Discount"
                        placeholder="Discount"
                        name="discount"
                    />
                    <LogoUploader square label="Image" placeholder="Upload photo" />
                </div>
                <Button type="submit" disabled={isPending}>
                    Add promotion
                </Button>
            </Form>
        </Formik>
    );
}
