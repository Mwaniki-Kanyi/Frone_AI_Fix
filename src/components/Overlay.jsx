import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Wind, Droplets, Sparkle } from 'lucide-react';

const Overlay = ({ onAuthClick }) => {
    return (
        <div className="relative z-20 w-full h-full flex flex-col justify-between p-8 md:p-16 pointer-events-none">
            {/* Header */}
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="w-full flex justify-between items-center pointer-events-auto"
            >
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <div className="p-1 glass rounded-full ring-1 ring-white/10 group-hover:ring-[#05fc00]/30 transition-all duration-500 overflow-hidden">
                        <img src="/assets/logo.png" alt="Frone AI Logo" className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-2xl font-semibold tracking-tight organic-text uppercase">Frone AI</span>
                </div>

                <div className="flex gap-8 items-center text-sm tracking-widest uppercase">
                    <div className="flex gap-6 opacity-60">
                        <a
                            href="#about"
                            onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="hover:text-[#05fc00] hover:opacity-100 transition-all duration-300"
                        >
                            Intelligence
                        </a>
                        <a
                            href="#process"
                            onClick={(e) => { e.preventDefault(); document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="hover:text-[#05fc00] hover:opacity-100 transition-all duration-300"
                        >
                            Ecosystem
                        </a>
                    </div>

                    <div className="flex gap-4 items-center pointer-events-auto">
                        <button
                            onClick={onAuthClick}
                            className="px-6 py-2 text-[10px] font-semibold tracking-widest text-white/60 hover:text-white transition-colors"
                        >
                            LOG IN
                        </button>
                        <div
                            onClick={onAuthClick}
                            className="px-5 py-2 glass rounded-full ring-1 ring-[#05fc00]/20 hover:ring-[#05fc00]/50 transition-all duration-500 cursor-pointer"
                        >
                            <span className="text-[10px] font-semibold tracking-widest text-[#05fc00]">SIGN UP</span>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Content */}
            <main className="max-w-3xl relative">
                {/* Subtle Background Logo */}
                <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none blur-sm select-none">
                    <img src="/assets/logo.png" alt="" className="w-full h-full object-contain grayscale" />
                </div>

                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-[#05fc00] mb-4 block">Future-Facing Digital Ecology</span>
                    <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
                        Restoring <br />
                        <span className="font-serif italic organic-text">Balance</span> Through <br />
                        Intelligence
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 max-w-xl mb-12 font-light leading-relaxed">
                        Experience the harmony of artificial intelligence and biological systems.
                        A living ecosystem governed by data and nature.
                    </p>

                    <div className="flex gap-6 items-center pointer-events-auto">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onAuthClick('Guest')}
                            className="px-8 py-4 glass rounded-full ring-1 ring-[#05fc00]/40 hover:ring-[#05fc00] transition-all duration-500 text-[#05fc00] font-medium"
                        >
                            Explore the Canopy
                        </motion.button>
                        <div
                            onClick={() => alert("Watch Genesis: Narrative Video Module — COMING SOON")}
                            className="flex items-center gap-3 text-white/40 text-sm italic group cursor-pointer hover:text-[#05fc00] transition-colors"
                        >
                            <div className="w-12 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-[#05fc00] transition-all duration-500" />
                            <span>Watch Genesis</span>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Footer Info */}
            <footer className="w-full flex justify-between items-end">
                <div className="flex gap-12">
                    {[
                        { icon: Wind, label: "Motion", value: "Fluid" },
                        { icon: Droplets, label: "Texture", value: "Organic" },
                        { icon: Sparkle, label: "Experience", value: "Cinematic" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.5 + (i * 0.2), duration: 1 }}
                            className="flex flex-col gap-1"
                        >
                            <item.icon className="w-4 h-4 text-white/30 mb-1" strokeWidth={1} />
                            <span className="text-[10px] uppercase tracking-widest text-white/40">{item.label}</span>
                            <span className="text-xs font-medium text-[#05fc00] uppercase tracking-wider">{item.value}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="text-right">
                    <span className="text-[10px] uppercase tracking-widest text-white/20 block mb-1">Status</span>
                    <span className="text-xs font-mono text-[#4a5d4e]">SYNCHRONIZING WITH NATURE...</span>
                </div>
            </footer>
        </div>
    );
};

export default Overlay;
