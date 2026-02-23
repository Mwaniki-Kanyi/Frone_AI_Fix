import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplets, ShieldCheck, Activity, Battery, Video, AlertCircle, TrendingUp } from 'lucide-react';
import IntelligenceLoop from '../../IntelligenceLoop';

const StatCard = ({ label, value, icon: Icon, color, trend }) => (
    <div className="p-6 glass ring-1 ring-white/5 flex flex-col gap-4">
        <div className="flex justify-between items-start">
            <div className={`p-2 rounded-full bg-${color}/10 ring-1 ring-${color}/30`}>
                <Icon className={`w-5 h-5 text-${color}`} strokeWidth={1.5} />
            </div>
            {trend && <span className="text-[10px] text-emerald-400 font-bold tracking-widest">{trend}</span>}
        </div>
        <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mb-1">{label}</span>
            <span className="text-2xl font-light tracking-tight text-white">{value}</span>
        </div>
    </div>
);

const FarmOwnerView = () => {
    const [activeLayer, setActiveLayer] = useState('Combined');
    const [isSimulatingThreat, setIsSimulatingThreat] = useState(false);

    const runSimulation = () => {
        setIsSimulatingThreat(true);
    };
    return (
        <div className="grid grid-cols-12 gap-6 pb-20">

            {/* Top Row Stats */}
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard label="Acres Monitored" value="1,240" icon={Activity} color="[#05fc00]" trend="+12.5%" />
                <StatCard label="Crop Health Index" value="92/100" icon={Droplets} color="emerald-400" />
                <StatCard label="Active Sensors" value="184 / 186" icon={Zap} color="[#05fc00]" />
                <StatCard label="Active Drones" value="2 / 4" icon={Battery} color="emerald-400" />
            </div>

            {/* Main Control Panel (Digital Twin Placeholder) */}
            <div className="col-span-12 lg:col-span-8 h-[500px] glass ring-1 ring-[#05fc00]/20 relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#05fc00] bg-[#080809]/60 px-3 py-1 rounded-full backdrop-blur-sm ring-1 ring-[#05fc00]/30">3D Digital Twin — Alpha Zone</span>
                </div>
                <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 rounded-full border border-[#05fc00]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-16 h-16 rounded-full bg-[#05fc00]/5 border border-[#05fc00]/40 animate-pulse" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.4em] text-white/40">Synchronizing Spatial Intelligence...</span>
                </div>

                {/* Layer Controls */}
                <div className="absolute bottom-6 right-6 flex flex-col gap-3">
                    {['Agriculture', 'Protection', 'Combined'].map((layer, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveLayer(layer)}
                            className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold border transition-all rounded-full glass ${activeLayer === layer ? 'border-[#05fc00] text-[#05fc00] shadow-[0_0_10px_#05fc0033]' : 'border-white/10 text-white/40 hover:text-white'}`}
                        >
                            {layer} Mode
                        </button>
                    ))}
                </div>
            </div>

            {/* Secondary Panels */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                {/* Threat Panel */}
                <div className="flex-1 glass ring-1 ring-red-500/10 p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-red-400 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" /> Live Threat Center
                        </h3>
                        <span className="text-[10px] text-white/40 animate-pulse">MONITORING...</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        {isSimulatingThreat ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-4 glass ring-1 ring-red-500 bg-red-500/10 rounded-lg animate-pulse"
                            >
                                <span className="text-[10px] text-red-400 font-bold block mb-1 uppercase tracking-widest">CRITICAL : THREAT DETECTED</span>
                                <p className="text-xs text-white/80 italic uppercase">Drone D-04 rerouting to Alpha-9 coordinates</p>
                            </motion.div>
                        ) : (
                            <div className="p-4 glass ring-1 ring-white/5 rounded-lg opacity-40 grayscale pointer-events-none">
                                <span className="text-[10px] text-white/60 block mb-1">NO ACTIVE INCIDENTS</span>
                                <p className="text-xs text-white/30 italic uppercase">Waiting for consensus trigger</p>
                            </div>
                        )}
                        <button
                            onClick={runSimulation}
                            disabled={isSimulatingThreat}
                            className={`w-full py-3 border text-[10px] uppercase tracking-widest font-bold transition-all ${isSimulatingThreat ? 'border-white/10 text-white/20' : 'border-[#05fc00]/20 text-[#05fc00] hover:bg-[#05fc00]/5'}`}
                        >
                            {isSimulatingThreat ? 'Simulation in Progress...' : 'Run Simulation Incident'}
                        </button>
                    </div>
                </div>

                {/* Drone Feed */}
                <div className="flex-1 glass ring-1 ring-white/10 p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 flex items-center gap-2">
                            <Video className="w-4 h-4" /> Drone Feed : D-04
                        </h3>
                        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[8px] rounded uppercase font-bold">Patrolling</span>
                    </div>
                    <div className="w-full aspect-video bg-black/40 rounded flex items-center justify-center border border-white/5 relative group">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                        <Video className="w-8 h-8 text-white/10 group-hover:text-white/20 transition-all" />
                        <span className="absolute bottom-2 right-4 text-[8px] font-mono text-white/20 tracking-wider">LAT: -1.2921 LON: 36.8219</span>
                    </div>
                </div>
            </div>

            {/* Bottom Row - Insights */}
            <div className="col-span-12 lg:col-span-6 glass ring-1 ring-white/5 p-8">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#05fc00] mb-8 border-b border-white/5 pb-4">Agricultural Optimization</h3>
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase text-white/30 tracking-widest block font-bold">Irrigation Request</span>
                        <span className="text-xl font-light">420L / Acre</span>
                        <p className="text-[10px] text-white/40 uppercase tracking-wider mt-2 italic leading-relaxed">System recommendation based on soil humidity sensors 12-18.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase text-white/30 tracking-widest block font-bold">Pest Probability</span>
                        <span className="text-xl font-light text-emerald-400">Low (3%)</span>
                        <div className="h-1 w-full bg-white/5 mt-3 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-400/40 w-[3%]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-12 lg:col-span-6 glass ring-1 ring-white/5 p-8 flex flex-col justify-between">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#05fc00] mb-8 border-b border-white/5 pb-4">Data Monetization</h3>
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-[10px] uppercase text-white/30 tracking-widest block font-bold">Credits Earned (KES)</span>
                        <span className="text-5xl font-serif italic organic-text">14,280</span>
                    </div>
                    <button className="px-6 py-2 glass ring-1 ring-[#05fc00]/40 text-[#05fc00] text-[10px] uppercase tracking-widest font-bold hover:bg-[#05fc00]/5 transition-all">
                        View Datasets
                    </button>
                </div>
                <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mt-6">All data anonymized as per Frone AI Compliance Protocol.</p>
            </div>

            {/* Intelligence Loop Tactical Overlay */}
            <IntelligenceLoop
                isOpen={isSimulatingThreat}
                scenario="Illegal Logging"
                onComplete={() => setIsSimulatingThreat(false)}
            />

        </div>
    );
};

export default FarmOwnerView;
