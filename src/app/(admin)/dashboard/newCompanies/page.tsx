import Header from '@/app/components/Header';

export interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <>
            <Header>Dashboard / New companies</Header>
            <p>Some additional info</p>
        </>
    );
}
