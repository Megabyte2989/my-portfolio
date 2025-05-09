import { m } from 'framer-motion';
import { MagicButton } from './button/MagicButton';

interface NavbarProps {
  currentColor: 'amber' | 'indigo' | 'pink' | 'teal' | 'purple';
  onColorChange: () => void;
}

const Navbar = ({ currentColor, onColorChange }: NavbarProps) => {
  const links = ['Projects', 'Skills', 'Contact'];


  return (
    <m.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`top-0 z-50 w-full`}>
      <div className="container flex mx-auto items-center justify-between px-6 py-4">
        <m.span whileHover={{ scale: 1.05 }} className="font-chocolate text-3xl font-bold dark:text-white">
          Mayar
        </m.span>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <m.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ color: '#A52A2A' }}
                className="text-gray-700 transition-colors hover:text-maroon-red dark:text-gray-200"
              >
                {link}
              </m.a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <MagicButton color={currentColor} onClick={onColorChange}>
              Change Theme
            </MagicButton>
          </div>
        </div>
      </div>
    </m.nav>
  );
};

export default Navbar;
