import GradientBgLayout from '@/Components/atoms/GradientBg/GradientBgLayout';
import { Head } from '@inertiajs/react';
import { User } from '@/types';

interface Auth {
    user: User;
}

export default function WelcomeLayout({ children, auth }: { children: React.ReactNode; auth: Auth }) {
    return (
        <>
            <Head title="Welcome" />
            <GradientBgLayout auth={auth}>
                {children}
            </GradientBgLayout>
        </>
    );
}
