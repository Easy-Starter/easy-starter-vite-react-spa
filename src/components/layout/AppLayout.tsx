import { Outlet } from 'react-router';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export function AppLayout() {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
