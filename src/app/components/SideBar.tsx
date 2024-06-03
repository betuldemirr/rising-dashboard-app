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
                <Nav.Link href="/home" className='mb-2'>
                    <Image src="/home.svg" alt="Logo" width={50} height={50} />
                </Nav.Link>
                <Nav.Link href="/login" className='mb-3' onClick={onLogout}>
                    <Image src="/logout.svg" alt="Logo" width={30} height={30} />
                </Nav.Link>
            </Nav>
        </div>
    );
}

export default Sidebar;