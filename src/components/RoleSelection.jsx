import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Tractor, TrendingUp, ArrowLeft } from 'lucide-react';

const RoleCard = ({ role, title, description, icon: Icon, onClick, delay }) => (
    <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        onClick={() => onClick(role)}
        className="group relative flex flex-col items-start text-left p-8 glass ring-1 ring-white/5 hover:ring-[#05fc00]/30 transition-all duration-500 h-full overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#05fc00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:ring-[#05fc00]/50 transition-all duration-500">
            <Icon className="w-7 h-7 text-[#05fc00]" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#05fc00] transition-colors uppercase tracking-widest">{title}</h3>
        <p className="text-white/40 text-xs leading-relaxed uppercase tracking-wider mb-8 italic">
            {description}
        </p>

        <div className="mt-auto flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-[#05fc00] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
            INITIATE SESSION <ArrowLeft className="w-3 h-3 rotate-180" strokeWidth={3} />
        </div>
    </motion.button>
);

const RoleSelection = ({ onSelect, onBack }) => {
    const roles = [
        {
            role: 'Guest',
            title: 'Curious Guest',
            description: 'Explore the vision and participate in the interactive genesis trial.',
            icon: User
        },
        {
            role: 'Farm Owner',
            title: 'Farm Owner',
            description: 'Deploy operational control over your land intelligence and protection assets.',
            icon: Tractor
        },
        {
            role: 'Admin',
            title: 'Global Admin',
            description: 'Oversight across regions, model performance, and system synchronization.',
            icon: Shield
        },
        {
            role: 'Investor',
            title: 'Growth Investor',
            description: 'Analyze scale metrics, impact data, and the intelligence moat.',
            icon: TrendingUp
        }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col px-8 md:px-16 py-12 relative overflow-hidden">
            {/* Header */}
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-between items-center mb-24"
            >
                <button
                    onClick={onBack}
                    className="flex items-center gap-3 text-[10px] tracking-[0.4em] text-white/40 hover:text-white transition-colors font-bold uppercase group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Essence
                </button>
                <div className="text-right">
                    <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase block mb-1">Access Gateway</span>
                    <span className="text-xs font-mono text-[#4a5d4e]">SECURE PROTOCOL ACTIVE</span>
                </div>
            </motion.nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-16"
                >
                    <div className="mb-8 flex items-center gap-4">
                        <img src="/assets/logo.png" alt="Frone AI" className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(5,252,0,0.3)]" />
                        <div className="h-10 w-[1px] bg-white/10" />
                        <span className="text-xs uppercase tracking-[0.3em] text-[#05fc00] underline underline-offset-8">Identification Protocol</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-light leading-tight">
                        Choose Your <br />
                        <span className="font-serif italic organic-text">Perspective</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {roles.map((item, i) => (
                        <RoleCard
                            key={item.role}
                            {...item}
                            onClick={onSelect}
                            delay={0.2 + (i * 0.1)}
                        />
                    ))}
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(26,47,35,0.15)_0,transparent_70%)] -z-10 pointer-events-none" />
        </div>
    );
};

export default RoleSelection;
