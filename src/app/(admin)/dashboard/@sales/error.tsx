'use client';

type Props = {
    error?: Error;
};

const Error = ({ error }: Props) => {
    return <div>Unexpected error. {error?.message}</div>;
};

export default Error;
