'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaApple, FaGooglePlay } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="section-container relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight"
                        >
                            Buy & Sell Smarter With{' '}
                            <span className="gradient-text">VendorX App</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                        >
                            A clean, organized marketplace app for WhatsApp vendors and buyers.
                        </motion.p>

                        {/* Download Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start"
                        >
                            <a
                                href="#"
                                className="no-underline flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <FaApple size={24} />
                                <div className="text-left">
                                    <div className="text-xs">Download on the</div>
                                    <div className="text-lg font-semibold">App Store</div>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="no-underline flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <FaGooglePlay size={24} />
                                <div className="text-left">
                                    <div className="text-xs">GET IT ON</div>
                                    <div className="text-lg font-semibold">Google Play</div>
                                </div>
                            </a>
                        </motion.div>

                        {/* WhatsApp Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        >
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <FaWhatsapp size={20} />
                                <span className="font-semibold">Chat on WhatsApp</span>
                            </a>
                            <a
                                href="https://chat.whatsapp.com/invite-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline flex items-center justify-center gap-2 bg-white text-green-500 border-2 border-green-500 px-6 py-3 rounded-full hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <FaWhatsapp size={20} />
                                <span className="font-semibold">Join WhatsApp Group</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative flex justify-center items-center"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

                            {/* Phone mockup placeholder */}
                            <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                                    {/* Placeholder for app screenshot */}
                                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                                                <span className="text-4xl">📱</span>
                                            </div>
                                            <p className="text-gray-600 font-medium">
                                                App Screenshot
                                                <br />
                                                <span className="text-sm text-gray-400">
                                                    Replace with actual mockup
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Notch */}
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
