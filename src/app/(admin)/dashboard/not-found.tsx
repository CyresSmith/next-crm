import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <p>Could not found</p>

            <Link href={'/dashboard'} className={'text-blue-500'}>
                Back to companies
            </Link>
        </div>
    );
};

export default NotFound;
