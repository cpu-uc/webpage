import Navbar from '@/Components/Navbar';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { User } from '@/types';
import '@/Components/organisms/header/header.css';
import '@assets/cpulogocolor.svg';

interface Auth {
    user: User;
}

export default function Header({ auth }: { auth: Auth }) {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="flex lg:col-start-2 lg:justify-center">
                        <ApplicationLogo className="logo" />
                    </div>
                    <Navbar auth={auth} />
                </div>
            </header>
            <main className="main-content">
                {/* Contenido principal aquí */}
            </main>
        </>
    );
}
