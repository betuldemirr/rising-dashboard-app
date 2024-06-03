import React from 'react';
import { NavigationProps } from '../models/NavigationProps';
import { Container } from 'react-bootstrap';

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
    return (
        <Container fluid className='border-bottom'>
            <Container>
                <nav className='pages-nav-tab'>
                    <ul>
                        <li className="tab-item">
                            <a className={`nav-link ${activeTab === 'my-proxies' ? 'active text-primary' : 'text-black'}`}
                                onClick={() => onTabChange('my-proxies')} href="#">
                                My Proxies
                            </a>
                        </li>

                        <li className="tab-item">
                            <a className={`nav-link ${activeTab === 'dashboard' ? 'active text-primary' : 'text-black'}`}
                                onClick={() => onTabChange('dashboard')} href="#">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </Container>
    );
};

export default Navigation;