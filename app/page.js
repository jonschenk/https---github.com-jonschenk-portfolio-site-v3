// author jonschenk
import dynamic from 'next/dynamic';
import Hub from './components/Hub/Hub';
import Cursor from './components/Cursor/Cursor';
import Footer from './components/Footer/Footer';

const Scene = dynamic(() => import('./components/Scene'), { ssr: false });

export default function Home() {
  return (
    <main className='relative h-screen'>
      <Cursor/>
      <Scene/>
      <Hub/>
      <Footer/>
    </main>

  );
}
