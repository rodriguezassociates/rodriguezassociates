import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FirmIntro from '@/components/FirmIntro';
import PracticeAreas from '@/components/PracticeAreas';
import OurApproach from '@/components/OurApproach';
import Attorney from '@/components/Attorney';
import ConsultationCTA from '@/components/ConsultationCTA';
import FAQ from '@/components/FAQ';
import ConsultationForm from '@/components/ConsultationForm';
import Contact from '@/components/Contact';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FirmIntro />
        <PracticeAreas />
        <OurApproach />
        <Attorney />
        <ConsultationCTA />
        <FAQ />
        <ConsultationForm />
        <Contact />
        <Disclaimer />
      </main>
      <Footer />
    </>
  );
}

export default App;
