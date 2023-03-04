import './Backdrop.css'
import { useEffect, useRef } from 'react';

const BackDrop = ({ setShow }) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                setShow();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    return (
        <div ref={ref} className="backdrop" />
    )
};

export default BackDrop;