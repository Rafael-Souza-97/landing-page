import Image from 'next/image';
import Logo from '@/assets/howhow-logo.svg';
import HomeComponent from '@/components/Home';
import About from '@/components/About';
import Clients from '@/components/Clients';

export default function Home() {
  return (
    <main className=''>
      <HomeComponent />
      <About />
      <Clients />
    </main>
  )
}
