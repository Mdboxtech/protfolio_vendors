'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialDark = stored ? stored === 'dark' : prefersDark;
        setIsDark(initialDark);
        document.documentElement.classList.toggle('dark', initialDark);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle('dark', next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl md:text-3xl font-bold gradient-text cursor-pointer"
                            onClick={() => scrollToSection('hero')}>
                            VendorX App
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="btn-link"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('features')}
                            className="btn-link"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('screenshots')}
                            className="btn-link"
                        >
                            Screenshots
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-link"
                        >
                            Contact
                        </button>
                        <button
                            onClick={() => scrollToSection('cta')}
                            className="btn-primary text-sm"
                        >
                            Download App
                        </button>

                        <button
                            aria-label="Toggle theme"
                            onClick={toggleTheme}
                            className="btn-link p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="btn-link p-2"
                        >
                            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                        <button
                            aria-label="Toggle theme"
                            onClick={toggleTheme}
                            className="btn-link p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white border-t border-gray-200"
                >
                    <div className="px-4 py-6 space-y-4">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="btn-link block w-full text-left py-2"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('features')}
                            className="btn-link block w-full text-left py-2"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('screenshots')}
                            className="btn-link block w-full text-left py-2"
                        >
                            Screenshots
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-link block w-full text-left py-2"
                        >
                            Contact
                        </button>
                        <button
                            onClick={() => scrollToSection('cta')}
                            className="btn-primary w-full text-center text-sm"
                        >
                            Download App
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
