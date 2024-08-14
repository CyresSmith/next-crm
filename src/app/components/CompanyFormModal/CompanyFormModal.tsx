'use client';

import Modal, { ModalProps } from '../Modal';
import CompanyForm, { CompanyFormProps } from './CompanyForm';

export interface CompanyFormModalProps extends ModalProps {
    onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal({ onSubmit, ...rest }: CompanyFormModalProps) {
    return (
        <Modal {...rest}>
            <CompanyForm onSubmit={onSubmit} />
        </Modal>
    );
}
