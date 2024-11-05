import { ImgHTMLAttributes } from 'react';

// Mapeo de nombres de SVG a sus respectivas importaciones
const svgMap: { [key: string]: string } = {
    'Postula': require('@assets/svg/Postula.svg').default,
    // Agrega más mapeos según sea necesario
};

interface SvgLogoProps extends ImgHTMLAttributes<HTMLImageElement> {
    name: string;
}

export default function SvgLogo({ name, ...props }: SvgLogoProps) {
    const logo = svgMap[name];

    if (!logo) {
        console.error(`SVG con nombre "${name}" no encontrado.`);
        return null;
    }

    return (
        <img
            {...props}
            src={logo}
            alt={name}
        />
    );
}
