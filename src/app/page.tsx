import HomeComponent from '@/components/Home/Home';
import About from '@/components/About/About';
import Clients from '@/components/Testimonials/Clients';
import Services from '@/components/Service/Services';
import Contact from '@/components/Contact/Contact';

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
