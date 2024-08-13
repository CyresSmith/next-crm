'use client';

import { useState } from 'react';
import Button from './Button';
import CompanyFormModal from './CompanyFormModal';

const AddCompanyButton = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>Add company</Button>
            <CompanyFormModal onSubmit={console.log} show={show} onClose={() => setShow(false)} />
        </>
    );
};

export default AddCompanyButton;
