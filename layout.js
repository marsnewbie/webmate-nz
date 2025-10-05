import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const translations = {
  en: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    getQuote: "Get a Quote"
  },
  zh: {
    home: "首页",
    services: "服务",
    portfolio: "案例",
    contact: "联系",
    getQuote: "获取报价"
  }
};

export default function Layout({ children }) {
  const location = useLocation();
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('webmate-language') || 'en';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    localStorage.setItem('webmate-language', language);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: language }));
  }, [language]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language];

  const navItems = [
    { label: t.home, path: createPageUrl("Home") },
    { label: t.services, path: createPageUrl("Services") },
    { label: t.portfolio, path: createPageUrl("Portfolio") },
    { label: t.contact, path: createPageUrl("Contact") }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <style>{`
        :root {
          --primary: #1E3A8A;
          --primary-light: #3B82F6;
          --accent: #059669;
          --accent-light: #10B981;
          --highlight: #F59E0B;
          --text-primary: #1E293B;
          --text-secondary: #64748B;
        }
      `}</style>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#1E3A8A' }} />
                      <stop offset="100%" style={{ stopColor: '#059669' }} />
                    </linearGradient>
                  </defs>
                  {/* Fern leaf inspired W */}
                  <path d="M8 38 L14 8 L20 38 M20 8 L26 38 M26 8 L32 38 M32 8 L38 38" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300 group-hover:stroke-[3.5]" />
                  <circle cx="24" cy="24" r="22" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="2" 
                    fill="none" 
                    className="transition-all duration-300 group-hover:stroke-[2.5]" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-[#1E3A8A] to-[#059669] bg-clip-text text-transparent">
                  Webmate NZ
                </span>
                <span className="text-xs text-gray-500 -mt-1">
                  {language === 'en' ? 'Professional Web Design' : '专业网站设计'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-200 relative group ${
                    location.pathname === item.path
                      ? 'text-[#1E3A8A]'
                      : 'text-gray-600 hover:text-[#1E3A8A]'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#1E3A8A] to-[#059669] transition-all duration-200 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
              
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">{language.toUpperCase()}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('zh')}>
                    中文
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gradient-to-r from-[#F59E0B] to-[#EF4444] hover:from-[#EF4444] hover:to-[#F59E0B] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {t.getQuote}
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Globe className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>EN</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('zh')}>中文</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-[#1E3A8A] to-[#059669] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to={createPageUrl("Contact")} onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-2 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white">
                  {t.getQuote}
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1E3A8A] to-[#059669] text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10">
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    <path d="M8 38 L14 8 L20 38 M20 8 L26 38 M26 8 L32 38 M32 8 L38 38" 
                      stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <span className="text-2xl font-bold">Webmate NZ</span>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                {language === 'en' 
                  ? 'Professional website design services for New Zealand businesses. From $199, we deliver stunning, SEO-optimized websites that drive results.'
                  : '新西兰专业网站设计服务。从$199起，我们为您打造精美、SEO优化的网站，助力业务增长。'}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{language === 'en' ? 'Quick Links' : '快速链接'}</h3>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path} className="text-white/80 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{language === 'en' ? 'Contact' : '联系我们'}</h3>
              <div className="flex flex-col gap-2 text-white/80">
                <p>Auckland, New Zealand</p>
                <p>info@webmate.nz</p>
                <p>+64 21 XXX XXXX</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>© 2024 Webmate NZ. {language === 'en' ? 'All rights reserved.' : '版权所有。'}</p>
            <p className="mt-2 text-xs">
              {language === 'en' 
                ? 'Keywords: Website Design NZ, Web Design New Zealand, Affordable Website Design, Professional Web Design Auckland, Small Business Website'
                : '关键词：新西兰网站设计，专业建站服务，网页设计，奥克兰网站制作'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}