import HomeComponent from '@/components/Home';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <main>
      <HomeComponent />
      <Services />
      <About />
      <Clients />
      <Contact />
    </main>
  )
}

export default Home;
