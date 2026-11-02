import { useMemo, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.webp';
import './Navbar.css';
import { Home, Briefcase, Phone, Info, FileText, Newspaper, HelpCircle } from 'lucide-react';
import { NavBar } from '../ui/tubelight-navbar';

const Navbar = () => {
  const navItems = useMemo(() => [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Our Work', url: '/our-work', icon: Briefcase },
    { name: 'Services', url: '/services', icon: FileText },
    { name: 'Contact', url: '/contact', icon: Phone },
  ], []);

  const pages = useMemo(() => [
    { label: 'Blog', url: '/blog-page', icon: Newspaper },
    { label: 'FAQ', url: '/faq', icon: HelpCircle },
    { label: 'About Us', url: '/about', icon: Info },
  ], []);

  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsPagesOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <nav className="navbar fixed-top bg-transparent">
      <div className="relative w-full flex items-center justify-center px-3 max-w-6xl mx-auto">
        <Link
          to="/"
          className="navbar-brand md:flex items-center gap-2 absolute left-3"
          style={{ textDecoration: 'none', color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
        >
          <img src={Logo} alt="Golden Eventz" width="72" height="72" decoding="async" className="logo me-2" />
        </Link>
        <div className="flex-1 flex justify-center">
          <div className="max-w-4xl w-full flex justify-center">
            <NavBar
              items={navItems}
              className="pointer-events-auto"
              rightSlot={
                <div className="relative" ref={dropdownRef}>
                  <button
                    className="text-white/85 font-semibold text-xs sm:text-sm px-3 py-2 hover:text-white transition whitespace-nowrap"
                    onClick={() => setIsPagesOpen((prev) => !prev)}
                  >
                    Pages
                  </button>
                  {isPagesOpen && (
                    <div className="absolute right-0 mt-2 w-36 sm:w-40 rounded-lg border border-white/15 bg-[#0f0f0f]/95 backdrop-blur-md shadow-lg py-2">
                      {pages.map((p) => (
                        <Link
                          key={p.label}
                          to={p.url}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                          onClick={() => setIsPagesOpen(false)}
                        >
                          <p.icon size={16} strokeWidth={2} />
                          <span>{p.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
