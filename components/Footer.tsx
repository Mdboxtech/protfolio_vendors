'use client';

import { FaWhatsapp, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-900 text-white">
            <div className="section-container">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold gradient-text mb-4">VendorX App</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Transforming the way vendors and customers connect through mobile commerce.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#hero" className="no-underline text-gray-400 hover:text-white transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="no-underline text-gray-400 hover:text-white transition-colors">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#screenshots" className="no-underline text-gray-400 hover:text-white transition-colors">
                                    Screenshots
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="no-underline text-gray-400 hover:text-white transition-colors">
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="no-underline text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="no-underline text-gray-400 hover:text-white transition-colors">
                                    Terms of Use
                                </a>
                            </li>
                            <li>
                                <a href="#" className="no-underline text-gray-400 hover:text-white transition-colors">
                                    Cookie Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="no-underline text-gray-400 hover:text-white transition-colors">
                                    GDPR
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://wa.me/1234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="no-underline flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    <FaWhatsapp size={20} />
                                    <span>WhatsApp Support</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:support@vendorx.com"
                                    className="no-underline flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                                >
                                    <FaEnvelope size={18} />
                                    <span>support@vendorx.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="no-underline text-white visited:text-white w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="no-underline text-white visited:text-white w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="no-underline text-white visited:text-white w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="no-underline text-white visited:text-white w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>

                        <p className="text-gray-400 text-sm">
                            © 2025 VendorX. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
