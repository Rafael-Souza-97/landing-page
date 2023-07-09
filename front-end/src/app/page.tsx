import HomeComponent from '@/components/Home';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className=''>
      <HomeComponent />
      <Services />
      <About />
      <Clients />
    </main>
  )
}
