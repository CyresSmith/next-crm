'use client';

import Modal, { ModalProps } from '../Modal';
import CompanyForm from './CompanyForm';

export default function CompanyFormModal(props: ModalProps) {
    return (
        <Modal {...props}>
            <CompanyForm onSubmit={props.onClose} />
        </Modal>
    );
}
