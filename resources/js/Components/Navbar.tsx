import { Link } from '@inertiajs/react';
import { User } from '@/types';

interface Auth {
    user: User;
}

export default function Navbar({ auth }: { auth: Auth }) {
    return (
        <nav className="-mx-3 flex flex-1 justify-end">
            {auth.user ? (
                <Link
                    href={route('dashboard')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Panel CPU
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
}
