import { SVGAttributes } from 'react';
import logo from '@assets/cpulogocolor.svg';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 316 316"
            xmlns="http://www.w3.org/2000/svg"
        >
            <image href={logo} width="316" height="316" />
        </svg>
    );
}
