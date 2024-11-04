// pagina para realizar las reservas de horarios de limpieza con jefes de módulo

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Reservas() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Reserva de Horarios de Limpieza 🧼
                </h2>
            }
        >
            <Head title="Reservas" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Reserva de Horarios de Limpieza
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
