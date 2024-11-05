import WelcomeLayout from '@/Layouts/WelcomeLayout';
import WelcomeCards from '@/Components/WelcomeCards';
import { User } from '@/types';
import Postula from "@assets/img/postula/Postula.png";
import Postula2 from "@assets/img/postula/Postula2.png";
import Postula3 from "@assets/img/postula/Postula3.png";
import R1 from "@assets/img/resumen/1.png";
import R2 from "@assets/img/resumen/2.png";
import R3 from "@assets/img/resumen/3.png";
import R4 from "@assets/img/resumen/4.png";
import R5 from "@assets/img/resumen/5.png";
import R6 from "@assets/img/resumen/6.png";
import V1 from "@assets/img/volvimos/1.jpg";
import V2 from "@assets/img/volvimos/2.jpg";
import C1 from "@assets/img/cputeayuda/1.jpg";

interface Auth {
    user: User;
}

export default function Welcome({ auth }: { auth: Auth }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const PostulaCard = {
        Title: '¡Postula a CPU 2024-2! 🚀',
        Description:
        "Con la vuelta a clases, ¡CPU también vuelve! ¿Quieres ser parte de una de las mejores iniciativas estudiantiles en la UC?👥 ¿Quieres contribuir a la reducción de la brecha digital y la basura electrónica?♻ Si respondiste que sí a alguna de esas preguntas, o si simplemente quieres ser parte de esta tremenda comunidad, te invitamos a postular en el formulario que tenemos en nuestro linktree!💜 Contamos con dos áreas a las que puedes sumarte: área técnica, área de diseño y difusión. ✨ Recuerda que NO necesitas conocimientos previos, nosotros estaremos para enseñarte todo lo que necesites. ¿Qué esperas para unirte?💜 Dudas al DM!",
        Images: [
            { original: Postula },
            { original: Postula2 },
            { original: Postula3 },
        ],
        Icon: '🚀',
        Link: 'https://forms.office.com/r/qYQ8KtUhUy'
    };

    const ResumenCard = {
        Title: '¡Resumen del primer semestre 2024! 🌟',
        Description:
        "¡Muchas gracias por este increíble primer semestre de 2024! 🎉🌟 Aquí va un pequeño resumen de todo lo que nos trajo esta emocionante primera mitad de año. 💜 La Reparatón fue todo un éxito, ¡superando todas nuestras expectativas! 💻🔧 Además, estuvimos presentes en numerosas ferias, llevando nuestra bonita iniciativa a más personas. 🌍 Ahora, les deseamos unas muy merecidas y reponedoras vacaciones de invierno ❄🌨. ¡Descansen, recarguen energías y prepárense para lo que se viene! 🔥✨ Porque lo mejor está por venir, y no querrán perderse lo que tenemos preparado. ¡Manténganse atentos y conéctense con nosotros para más sorpresas y novedades! 👀 Además, queremos agradecer todo el apoyo brindado este semestre, a todos los técnicos y la directiva de la iniciativa. ♥ ¡Nos vemos pronto!",
        Images: [
            { original: R1 },
            { original: R2 },
            { original: R3 },
            { original: R4 },
            { original: R5 },
            { original: R6 },
        ],
        Icon: '🌟',
        Link: 'https://linktr.ee/CPUUC'
    };

    const VolvimosCard = {
        Title: '¡Volvimos! 🔥',
        Description:
        "¡Volvimos este semestre con todo!🥳 Mini resumen de cómo empezamos este segundo semestre con eventos y módulos de trabajo 💜",
        Images: [
            { original: V1 },
            { original: V2 },
        ],
        Icon: '🔥',
        Link: 'https://linktr.ee/cpu_uc?utm_source=linktree_profile_share&ltsid=85b871aa-4995-452d-aa9e-5e853eafa602'
    };

    const CPUTeAyudaCard = {
        Title: '¡CPU Te Ayuda! 🤝',
        Description:
        "¡CPU Te Ayuda! 🤝 Si eres de LICC o Ingeniería y necesitas un computador para tus ramos, CPU te puede ayudar!. Solo debes rellenar el siguiente formulario para estar entre los posibles seleccionados ¡Estamos aquí para ayudarte! 💜",
        Images: [
            { original: C1 },
        ],
        Icon: '🤝',
        Link: 'https://forms.office.com/r/LS7B21p49E'
    };

    return (
        <WelcomeLayout auth={auth}>
            <WelcomeCards handleImageError={handleImageError} Cards={[PostulaCard, ResumenCard]} />
        </WelcomeLayout>
    );
}
