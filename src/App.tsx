import type { FC } from 'react';
import { useEffect, useState } from 'react';

import Navbar from '~/components/ui/Navbar';
import faqData from '~/components/ui/faqData'; // Corrected import path
import FaqSection from './components/ui/FAQ';
import Contact from './components/ui/Contact';
import Hero from './components/ui/Hero';
import Projects from './components/ui/Projects';
import Skills from './components/ui/Skills';
import Footer from './components/ui/footer'; // Corrected import path
import { RootProviders } from './providers/root-providers';

const colors = ['indigo', 'pink', 'teal', 'amber', 'purple'] as const;
type Color = typeof colors[number];

const AppLayer = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [currentColor, setCurrentColor] = useState<Color>('indigo');

  useEffect(() => {
    console.log('useEffect called');
    // Simulate an async operation to set the app as ready
    setTimeout(() => {
      console.log('Setting appIsReady to true');
      setAppIsReady(true);
    }, 1000);
  }, []);

  const handleColorChange = () => {
    const currentIndex = colors.indexOf(currentColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setCurrentColor(colors[nextIndex]);
  };

  console.log('appIsReady:', appIsReady);

  return appIsReady ? (
    <>
      <Navbar currentColor={currentColor} onColorChange={handleColorChange} />
      <Hero currentColor={currentColor} />
      <Skills />
      <Projects />
      <FaqSection data={faqData} />
      <Contact />
      <Footer />
    </>
  ) : (
    <div>hi there.. <br /> welcome to my portfolio</div>
  );
};

export const App: FC = () => {
  return (
    <RootProviders>
      <AppLayer />
    </RootProviders>
  );
};

export default App;
