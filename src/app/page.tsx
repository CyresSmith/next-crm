import dynamic from 'next/dynamic';

const AddCompanyButton = dynamic(() => import('./components/AddCompanyButton'), { ssr: false });

export default function Home() {
    return (
        <main>
            <h1 className="text-2xl">Home page</h1>

            <AddCompanyButton />
        </main>
    );
}
