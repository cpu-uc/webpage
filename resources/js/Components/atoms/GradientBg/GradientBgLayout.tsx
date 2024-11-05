import Header from '@/Components/organisms/header/Header';
import { PropsWithChildren } from 'react';
import { User } from '@/types';
import '@/Components/atoms/GradientBg/gradient-bg.css';

interface Auth {
    user: User;
}

interface GradientBgLayoutProps extends PropsWithChildren {
    auth: Auth;
}

export default function GradientBgLayout({ children, auth }: GradientBgLayoutProps) {
    return (
        <div className="background">
            <div className="relative flex min-h-screen flex-col items-center justify-center">
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <Header auth={auth} />
                    <main className="mt-6">
                        {children}
                    </main>
                    <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                        © 2024 CPU. All rights reserved.
                    </footer>
                </div>
            </div>
        </div>
    );
}
