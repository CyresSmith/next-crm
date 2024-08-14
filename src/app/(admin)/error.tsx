'use client';

import Button from '@/app/components/Button';

type Props = {
    error: Error;
    reset: () => void;
};

const Error = ({ error, reset }: Props) => {
    return (
        <div>
            <p>{`Something went wrong. ${error.message}`}</p>
            <Button onClick={reset}>Try again</Button>
        </div>
    );
};

export default Error;
