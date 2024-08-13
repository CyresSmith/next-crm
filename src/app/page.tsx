import dynamic from 'next/dynamic';
import StatusLabel, { Status } from './components/StatusLabel';

const AddCompanyButton = dynamic(() => import('./components/AddCompanyButton'), { ssr: false });

export default function Home() {
    return (
        <main>
            <h1 className="text-2xl">Home page</h1>

            <AddCompanyButton />

            <StatusLabel status={Status.Active}>Active</StatusLabel>
            <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
            <StatusLabel status={Status.Pending}>Pending</StatusLabel>
            <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
        </main>
    );
}
