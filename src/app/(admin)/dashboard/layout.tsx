import { ReactNode } from 'react';

export interface LayoutProps {
    children: ReactNode;
    stats: ReactNode;
    sales: ReactNode;
    categories: ReactNode;
    countries: ReactNode;
    promotions: ReactNode;
}

export default function Layout({
    children,
    stats,
    sales,
    categories,
    countries,
    promotions,
}: LayoutProps) {
    return (
        <div>
            {children}
            <main className="grid grid-cols-12 gap-5 py-10 pl-10 pr-7">
                <div className="col-span-12">{stats}</div>
                <div className="col-span-5">{sales}</div>
                <div className="col-span-7">{categories}</div>
                <div className="col-span-6">{countries}</div>
                <div className="col-span-6">{promotions}</div>
            </main>
        </div>
    );
}
