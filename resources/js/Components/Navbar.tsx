import { VscAccount } from "react-icons/vsc";
import { Link } from '@inertiajs/react';
import { PageProps } from '@/types';


export default function Navbar({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <nav className="-mx-3 flex flex-1 justify-end">
            {auth.user ? (
                <Link
                    href={route('dashboard')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    <VscAccount className="w-8 h-8" />
                </Link>
            ) : (
                <>
                    <Link
                        href={route('login')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Iniciar sesión
                    </Link>
                    <Link
                        href={route('register')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Registrarse
                    </Link>
                </>
            )}
        </nav>
    );
};