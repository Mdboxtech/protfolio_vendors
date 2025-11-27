'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Small Business Owner',
        image: '/img/testimonial-1.jpg',
        feedback: 'VendorX transformed my WhatsApp business! My customers love the organized product browsing.',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Fashion Vendor',
        image: '/img/testimonial-2.jpg',
        feedback: 'Finally, a professional way to showcase my products. Sales increased by 300% in the first month!',
        rating: 5,
    },
    {
        name: 'Aisha Rahman',
        role: 'Home Decor Seller',
        image: '/img/testimonial-3.jpg',
        feedback: 'The app is so easy to use. My customers can browse and order without the WhatsApp chaos.',
        rating: 5,
    },
    {
        name: 'David Martinez',
        role: 'Electronics Dealer',
        image: '/img/testimonial-4.jpg',
        feedback: 'Best investment for my business. The checkout process is smooth and professional.',
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-container bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Loved by <span className="gradient-text">Vendors</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Join thousands of successful vendors who have transformed their business with VendorX.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="card"
                    >
                        {/* User Image */}
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                {testimonial.name.charAt(0)}
                            </div>
                            <div className="ml-4">
                                <h4 className="font-bold text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400" size={18} />
                            ))}
                        </div>

                        {/* Feedback */}
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                            &ldquo;{testimonial.feedback}&rdquo;
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
                {[
                    { number: '10K+', label: 'Active Vendors' },
                    { number: '50K+', label: 'Products Listed' },
                    { number: '100K+', label: 'Happy Customers' },
                    { number: '4.9★', label: 'Average Rating' },
                ].map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                            {stat.number}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
