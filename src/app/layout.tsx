'use client'

import React, { useState } from 'react';
import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

 
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}