'use client';

import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function CTA() {
    return (
        <section id="cta" className="section-container bg-gradient-to-br from-primary-600 to-accent-600 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Start Shopping Smarter Today
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
                        Join thousands of vendors and customers already using VendorX.
                        <br />
                        Download now and experience the future of mobile commerce.
                    </p>

                    {/* Download Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <a
                            href="#"
                            className="no-underline flex items-center justify-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl min-w-[200px]"
                        >
                            <FaApple size={32} />
                            <div className="text-left">
                                <div className="text-xs">Download on the</div>
                                <div className="text-xl font-semibold">App Store</div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="no-underline flex items-center justify-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl min-w-[200px]"
                        >
                            <FaGooglePlay size={28} />
                            <div className="text-left">
                                <div className="text-xs">GET IT ON</div>
                                <div className="text-xl font-semibold">Google Play</div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Additional info */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 text-white/80 text-sm"
                    >
                        ✓ Free to download &nbsp;&nbsp;•&nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Available worldwide
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
