// author jonschenk
import dynamic from 'next/dynamic';
import Hub from './components/Hub/Hub';

const Scene = dynamic(() => import('./components/Scene'), {
  ssr: false
})

export default function Home() {
  return (
    <main className='relative h-screen'>
      <Scene/>
      <Hub/>
    </main>
  );
}
