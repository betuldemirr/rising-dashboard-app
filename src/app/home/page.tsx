"use client"

import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import Navigation from '../components/Navigation';
import Dashboard from '../dashboard/page';
import MyProxies from '../my-proxies/page';
import { Alert, Container } from 'react-bootstrap';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [alertInfo, setAlertInfo] = useState<boolean>(false);

  const onCloseAlert = () => {
    setAlertInfo(false);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Container fluid className='home-container'>
      <Sidebar />
      <div className='w-100'>
      <Container className='my-5'>
        <Alert variant="info" dismissible onClose={onCloseAlert}>
          Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit card. <span className='text-decoration-underline'>Start Free Trial</span>
        </Alert>
        <h1 className='my-5'>Proxies & Scraping Infrastructure</h1>
      </Container>
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 'dashboard' ? <Dashboard /> : <MyProxies />}
      </div>
    </Container>
  );
}

export default Home;