'use client';

import Button from '@/app/components/Button';

type Props = {
    error: Error;
    reset: () => void;
};

const GlobalError = ({ error, reset }: Props) => {
    return (
        <html>
            <body>
                <p>{`Something globally went wrong. ${error.message}`}</p>
                <Button onClick={reset}>Try again</Button>
            </body>
        </html>
    );
};

export default GlobalError;
