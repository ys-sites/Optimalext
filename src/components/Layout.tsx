import { Link, Outlet, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X, Paintbrush, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { FloatingHeader } from "./ui/floating-header";
import { useTranslation } from "react-i18next";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isContact = location.pathname === "/contact";
  const { t } = useTranslation();
  const phoneNumber = "(514) 707-6123";
  const contactFormHref = "/contact#contact-form";
  const serviceCities = t("layout.serviceCities");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const scrollToHashTarget = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      };

      requestAnimationFrame(scrollToHashTarget);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.services'), path: "/#services" },
    { name: t('nav.portfolio'), path: "/portfolio" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  return (
    <div className={cn("min-h-screen flex flex-col font-sans text-gray-900", isContact ? "bg-[#f7f3eb]" : "bg-gray-50")}>
      {/* Navigation */}
      <div className="w-full h-0 sticky top-0 z-50">
        <div className="w-full px-4 pt-4">
          <FloatingHeader />
        </div>
      </div>

      {/* Main Content */}
      <main className={cn("flex-grow", !isHome && "pt-8")}>
        <Outlet />
      </main>

      <a
        href={contactFormHref}
        aria-label={t("layout.openContactForm")}
        className="lg:hidden fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1e40af] text-white shadow-[0_18px_35px_rgba(54,59,129,0.35)] transition-transform duration-200 active:scale-95"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6 gap-3">
                <img 
                  src="/logo.png" 
                  alt="Renevation a Montreal Logo" 
                  className="h-[4.5rem] w-auto object-contain" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="flex items-center">
                  <span className="font-bold text-2xl tracking-tight text-gray-900">OPTIMALEXT</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                {t('footer.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">{t('footer.quickLinks')}</h3>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">{t('footer.contactUs')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 font-medium">2050, Dandurand suite 109 A<br />Montréal, (Québec) H2G 1Y9</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 font-medium">{phoneNumber}</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <a href="mailto:claude.lessard@optimalext.com" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                      claude.lessard@optimalext.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 font-medium">
              &copy; {new Date().getFullYear()} Renevation a Montreal. {t('footer.rights')}
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/optimalext" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
