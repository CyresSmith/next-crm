import Link from 'next/link';

type Props = {};

const NotFound = (props: Props) => {
    return (
        <div>
            <p>Could not found company</p>

            <Link href={'/companies'} className={'text-blue-500'}>
                Back to companies
            </Link>
        </div>
    );
};

export default NotFound;
