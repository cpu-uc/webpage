import React from 'react';
import '@/Components/atoms/anchorButton/AnchorButton.css';

interface ButtonProps {
    id: string;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ id, text }) => {
    return (
        <button className="button" type="button" id={id}>
            {text}
        </button>
    );
};

export default Button;
