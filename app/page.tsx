import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeOverview from './components/HomeOverview';
import Contact from './components/Contact';
import PortfolioUpdateDialog from './components/PortfolioUpdateDialog';

export default function Home() {
  return (
    <>
      <PortfolioUpdateDialog />
      <Navbar />
      <Hero />
      <HomeOverview />
      <Contact />
    </>
  );
}
