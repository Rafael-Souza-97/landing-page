import Image from 'next/image';
import Logo from '../assets/howhow-logo.svg';
import HomeComponent from '@/components/Home';
import About from '@/components/About';

export default function Home() {
  return (
    <main className=''>
      <HomeComponent />
      <About />
    </main>
  )
}
