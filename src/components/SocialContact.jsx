import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Instagram, Music2, Mail } from 'lucide-react';

const SocialButton = ({ icon: Icon, label, href, color }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex flex-col items-center gap-3 no-underline"
    >
        <div className="w-16 h-16 rounded-full glass flex items-center justify-center ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-500">
            <Icon className="w-6 h-6 text-white/70 group-hover:text-[#05fc00] transition-colors" strokeWidth={1.5} />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-[#05fc00] transition-colors">{label}</span>
    </motion.a>
);

const SocialContact = () => {
    return (
        <section className="w-full bg-[#080809] px-8 md:px-16 py-32 relative z-20 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-[#05fc00] mb-4 block">Connection</span>
                <h2 className="text-4xl md:text-5xl font-light mb-12">
                    Reach <span className="font-serif italic organic-text">Out</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-12 mt-16">
                    <SocialButton
                        icon={MessageCircle}
                        label="WhatsApp"
                        href="https://wa.me/254113786674"
                        color="#25D366"
                    />
                    <SocialButton
                        icon={Linkedin}
                        label="LinkedIn"
                        href="https://www.linkedin.com/in/mwaniki-kanyi-7335002a1/"
                        color="#0077B5"
                    />
                    <SocialButton
                        icon={Instagram}
                        label="Instagram"
                        href="https://www.instagram.com/frone.ai/"
                        color="#E4405F"
                    />
                    <SocialButton
                        icon={Music2}
                        label="TikTok"
                        href="https://www.tiktok.com/@frone.ai?_r=1&_t=ZS-93hdcJMg0ck"
                        color="#000000"
                    />
                    <SocialButton
                        icon={Mail}
                        label="Gmail"
                        href="mailto:mwanikanyi@gmail.com"
                        color="#EA4335"
                    />
                </div>

                <p className="mt-20 text-white/30 text-xs font-light tracking-widest uppercase">
                    Synthesizing Digital Presence & Natural Intelligence
                </p>
            </div>
        </section>
    );
};

export default SocialContact;
