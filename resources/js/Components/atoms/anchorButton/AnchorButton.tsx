import React from 'react';
import '@/Components/atoms/anchorButton/AnchorButton.css';

interface AnchorButtonProps {
    url: string;
    text: string;
}

const AnchorButton: React.FC<AnchorButtonProps> = ({ url, text }) => {
    return (
        <a className="button" href={url}>
            {text}
        </a>
    );
};

export default AnchorButton;
