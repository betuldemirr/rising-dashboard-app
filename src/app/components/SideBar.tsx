import React from 'react';
import { Nav } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { removeAuthToken } from '../utils/Authutils';

const Sidebar: React.FC = () => {
    const router = useRouter();

    const onLogout = () => {
        removeAuthToken();
        router.push('/login');
    };

    return (
        <div className="sidebar">
            <Image src="/logo.svg" alt="Logo" className='mb-3' width={50} height={50} />
            <Nav className="flex-column gap-3">
                <Nav.Link href="/home">
                    <Image src="/home.svg" alt="Logo" width={50} height={50} />
                </Nav.Link>
                <Nav.Link href="/login" onClick={onLogout}>
                    <Image src="/logout.svg" alt="Logo" width={50} height={50} />
                </Nav.Link>
            </Nav>
        </div>
    );
}

export default Sidebar;