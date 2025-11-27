'use client';

import { motion } from 'framer-motion';
import { FiGrid, FiZap, FiShield, FiSmartphone } from 'react-icons/fi';

const features = [
    {
        icon: FiGrid,
        title: 'Organized Product Display',
        description: 'No more scattered WhatsApp posts. Browse products in a clean, organized grid layout.',
    },
    {
        icon: FiZap,
        title: 'Fast Checkout',
        description: 'Users browse and place requests easily with our streamlined checkout process.',
    },
    {
        icon: FiShield,
        title: 'Secure Communication',
        description: 'Built-in vendor contact system ensures safe and reliable communication.',
    },
    {
        icon: FiSmartphone,
        title: 'Works on Any Device',
        description: 'Full iOS and Android support. Your customers can shop from anywhere.',
    },
];

export default function Features() {
    return (
        <section id="features" className="section-container bg-gray-50 dark:bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Why Choose <span className="gradient-text">VendorX</span>?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Everything you need to run a successful online marketplace, all in one place.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="card group"
                        >
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Icon className="text-white" size={32} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
