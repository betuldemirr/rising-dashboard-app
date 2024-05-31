import '../styles/globals.css';
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
        <header className="bg-primary text-white text-center py-3">
          <h1>Rising Dashboard App</h1>
        </header>
        <div style={{ margin: '30px 40px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}