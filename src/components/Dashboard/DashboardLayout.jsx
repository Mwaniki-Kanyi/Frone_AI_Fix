import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, LogOut, Sun, CloudRain, Wind, Map as MapIcon, Layers, Settings, Globe, ShieldAlert } from 'lucide-react';

const GlobalHeader = ({ userRole, onLogout }) => (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 px-8 flex justify-between items-center glass-blur border-b border-white/5 pointer-events-auto">
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
                <div className="p-1 glass rounded-full ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-500 overflow-hidden">
                    <img src="/assets/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
                </div>
                <span className="text-xl font-semibold tracking-tight uppercase">Frone AI</span>
            </div>

            <div className="h-6 w-[1px] bg-white/10 mx-2" />

            {/* Role Indicator */}
            <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase leading-none mb-1">Context</span>
                <span className="text-xs font-bold text-[#05fc00] uppercase tracking-widest">{userRole} Portal</span>
            </div>
        </div>

        {/* Shared Selectors */}
        <div className="flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
            <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                <span>Active Zone:</span>
                <span className="text-white px-3 py-1 glass rounded-md ring-1 ring-white/5">Demo Farm Alpha</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors">
                <span>Timeline:</span>
                <span className="text-white">Live</span>
            </div>
            <div className="flex items-center gap-3">
                <ShieldAlert className="w-4 h-4 text-[#4a5d4e]" />
                <span className="text-[#4a5d4e]">System Operational</span>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 px-4 py-2 glass rounded-full ring-1 ring-white/5">
                <Globe className="w-4 h-4" />
                <span>EN</span>
            </div>
            <button
                onClick={onLogout}
                className="p-2 glass rounded-full hover:ring-red-500/30 hover:text-red-400 transition-all duration-300"
            >
                <LogOut className="w-5 h-5" />
            </button>
        </div>
    </header>
);

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    return (
        <aside className="fixed left-0 top-20 bottom-0 w-20 z-40 border-r border-white/5 flex flex-col items-center py-8 gap-8 glass-blur pointer-events-auto">
            {[LayoutDashboard, MapIcon, Layers, Sun, Wind, CloudRain, Settings].map((Icon, i) => (
                <motion.button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 transition-all relative ${activeIndex === i ? 'text-[#05fc00]' : 'text-white/30 hover:text-white'}`}
                >
                    {activeIndex === i && (
                        <motion.div
                            layoutId="activeSide"
                            className="absolute inset-0 bg-[#05fc00]/5 rounded-xl ring-1 ring-[#05fc00]/20"
                        />
                    )}
                    <Icon className="w-6 h-6 relative z-10" strokeWidth={1.5} />
                </motion.button>
            ))}
        </aside>
    );
};

const DashboardLayout = ({ userRole, children, onLogout }) => {
    return (
        <div className="relative w-full h-screen overflow-hidden text-white cursor-default">
            <GlobalHeader userRole={userRole} onLogout={onLogout} />
            <Sidebar />

            {/* Main Content Area */}
            <main className="ml-20 mt-20 h-[calc(100vh-80px)] overflow-hidden relative">
                {/* Digital Twin 3D View (Background of Main Area) */}
                <div className="absolute inset-0 z-0 opacity-40">
                    {/* This is where the 3D scene becomes more interactive or role-specific */}
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 w-full h-full p-8 overflow-y-auto no-scrollbar pointer-events-auto">
                    {children}
                </div>
            </main>

            <style jsx>{`
        .glass-blur {
          background: rgba(8, 8, 9, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
};

export default DashboardLayout;
