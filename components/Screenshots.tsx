'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const screenshots = [
    {
        title: 'Home / Product Feed',
        description: 'Browse all products in a beautiful grid layout',
        image: '/img/app-screen-1.png',
    },
    {
        title: 'Product Details',
        description: 'View detailed product information and images',
        image: '/img/app-screen-2.png',
    },
    {
        title: 'Categories',
        description: 'Easy navigation through product categories',
        image: '/img/app-screen-3.png',
    },
    {
        title: 'Vendor Contact',
        description: 'Direct communication with vendors',
        image: '/img/app-screen-4.png',
    },
];

export default function Screenshots() {
    return (
        <section id="screenshots" className="section-container bg-white dark:bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    See It In <span className="gradient-text">Action</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Experience the intuitive interface designed for both vendors and customers.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {screenshots.map((screenshot, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="group"
                    >
                        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-4 shadow-xl overflow-hidden">
                            {/* Phone frame */}
                            <div className="relative bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
                                <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19]">
                                    {/* Placeholder for screenshot */}
                                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center p-4">
                                        <div className="text-center">
                                            <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-xl shadow-lg flex items-center justify-center">
                                                <span className="text-3xl">
                                                    {index === 0 ? '🏠' : index === 1 ? '📦' : index === 2 ? '📂' : '💬'}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-600 font-medium">
                                                Screenshot placeholder
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Notch */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-full"></div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mt-6 text-center">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                                {screenshot.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {screenshot.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 text-center"
            >
                {/* <p className="text-gray-500 text-sm">
                    💡 Tip: Replace placeholder images in <code className="bg-gray-100 px-2 py-1 rounded">/public/img/</code> with your actual app screenshots
                </p> */}
            </motion.div>
        </section>
    );
}
