import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Lock, Sparkles, Shield, Cpu, MessageCircle, ArrowRight } from 'lucide-react';
import IntelligenceLoop from '../../IntelligenceLoop';

const DemoCard = ({ title, description, icon: Icon, delay, onPlay, isActive }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
        className={`p-8 glass ring-1 transition-all group flex flex-col gap-4 ${isActive ? 'ring-[#05fc00] bg-[#05fc00]/5' : 'ring-white/5 hover:ring-[#05fc00]/20'}`}
    >
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center ring-1 ring-white/10 group-hover:ring-[#05fc00]/30 transition-all">
            <Icon className={`w-5 h-5 ${isActive ? 'text-[#05fc00] animate-pulse' : 'text-[#05fc00]'}`} strokeWidth={1.5} />
        </div>
        <h3 className="text-lg font-medium text-white group-hover:text-[#05fc00] transition-colors uppercase tracking-widest">{isActive ? 'Scenario Active' : title}</h3>
        <p className="text-[10px] uppercase tracking-widest leading-relaxed text-white/40 italic">{description}</p>
        <button
            onClick={onPlay}
            className={`mt-4 flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-[#05fc00] transition-all ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'}`}
        >
            {isActive ? 'HALT SIMULATION' : 'PLAY SCENARIO'} {isActive ? <Lock className="w-3 h-3" /> : <Play className="w-3 h-3 fill-[#05fc00]" />}
        </button>
    </motion.div>
);

const GuestView = ({ onUpgrade }) => {
    const [activeScenario, setActiveScenario] = useState(null);

    const toggleScenario = (id) => {
        setActiveScenario(id);
    };
    return (
        <div className="grid grid-cols-12 gap-6 pb-20">

            {/* Welcome Banner */}
            <div className="col-span-12 glass p-12 ring-1 ring-[#05fc00]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#05fc00]/10 to-transparent pointer-events-none" />
                <div className="relative z-10 max-w-2xl">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#05fc00] mb-4 block underline underline-offset-8">Onboarding Protocol</span>
                    <h2 className="text-4xl md:text-5xl font-light mb-6">Welcome to the <span className="font-serif italic organic-text">Genesis</span> Trial</h2>
                    <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
                        Experience the core of Frone AI. In this registered trial mode, you can explore the 3D Digital Twin and replay verified detection scenarios. To access live drone feeds and operational control, an upgrade is required.
                    </p>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 glass rounded ring-1 ring-white/5">
                            <span className="text-[10px] block opacity-30 mb-1">MONITORED ACRES</span>
                            <span className="text-xl font-light">120 <span className="text-xs opacity-50 font-sans italic">Trial Zone</span></span>
                        </div>
                        <div className="px-4 py-2 glass rounded ring-1 ring-white/5">
                            <span className="text-[10px] block opacity-30 mb-1">VIRTUAL SENSORS</span>
                            <span className="text-xl font-light">18 <span className="text-xs opacity-50 font-sans italic">Online</span></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Demo Digital Twin Placeholder */}
            <div className="col-span-12 lg:col-span-8 h-[450px] glass ring-1 ring-white/5 flex flex-col items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2f23]/5 to-[#1a2f23]/20" />
                <div className="relative z-10 text-center">
                    {activeScenario ? (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-24 h-24 rounded-full border-2 border-[#05fc00] flex items-center justify-center mb-6 animate-pulse">
                                <Sparkles className="w-10 h-10 text-[#05fc00]" />
                            </div>
                            <span className="text-xs uppercase tracking-[0.5em] text-[#05fc00] font-bold mb-2">Simulating: {activeScenario}</span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Injecting Consensus Data...</span>
                        </motion.div>
                    ) : (
                        <>
                            <Shield className="w-16 h-16 text-white/5 mx-auto mb-6" strokeWidth={1} />
                            <span className="text-xs uppercase tracking-[0.5em] text-white/20">Read-Only Digital Twin Active</span>
                        </>
                    )}
                </div>
                <div className="absolute bottom-6 left-6 space-y-2">
                    <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${activeScenario ? 'bg-[#05fc00] shadow-[0_0_10px_#05fc00]' : 'bg-emerald-500'}`} />
                        <span className={`text-[10px] uppercase tracking-widest font-bold ${activeScenario ? 'text-[#05fc00]' : 'text-emerald-500/80'}`}>Consensus Layer Active</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${activeScenario ? 'bg-red-500 animate-ping' : 'bg-white/10'}`} />
                        <span className={`text-[10px] uppercase tracking-widest font-bold ${activeScenario ? 'text-red-500/80' : 'text-white/20'}`}>Live Threat Simulation Trigger</span>
                    </div>
                </div>
            </div>

            {/* Scenario Selection */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                <DemoCard
                    title="Wildfire Response"
                    description="Witness how thermal sensors and smoke particles trigger an autonomous drone verify loop."
                    icon={Sparkle}
                    delay={0.1}
                    onPlay={() => toggleScenario('Wildfire')}
                    isActive={activeScenario === 'Wildfire'}
                />
                <DemoCard
                    title="Illegal Logging"
                    description="Observe acoustic consensus detecting chainsaw patterns deep within the forest canopy."
                    icon={Cpu}
                    delay={0.2}
                    onPlay={() => toggleScenario('Logging')}
                    isActive={activeScenario === 'Logging'}
                />
                <DemoCard
                    title="Charcoal Burning"
                    description="Follow the heat-signature mapping that identifies smoke plumes at night."
                    icon={MessageCircle}
                    delay={0.3}
                    onPlay={() => toggleScenario('Charcoal')}
                    isActive={activeScenario === 'Charcoal'}
                />
            </div>

            {/* Insight Preview (Locked) */}
            <div className="col-span-12 lg:col-span-7 glass ring-1 ring-white/5 p-10 flex flex-col relative overflow-hidden h-[300px]">
                <div className="absolute inset-0 backdrop-blur-md bg-black/20 flex flex-col items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Lock className="w-8 h-8 text-[#05fc00] mb-4" strokeWidth={1.5} />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#05fc00]">Operational Resolution Locked</span>
                </div>
                <div className="group relative h-full">
                    <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 mb-8 border-b border-white/5 pb-4">Agricultural Intelligence Preview</h3>
                    <div className="grid grid-cols-3 gap-8 filter blur-[4px]">
                        <div className="space-y-4">
                            <div className="h-2 w-full bg-white/5 rounded" />
                            <div className="h-12 w-12 rounded-full bg-white/5" />
                            <div className="h-2 w-1/2 bg-white/5 rounded" />
                        </div>
                        <div className="space-y-4">
                            <div className="h-2 w-full bg-white/5 rounded" />
                            <div className="h-2 w-2/3 bg-white/5 rounded" />
                            <div className="h-2 w-1/3 bg-white/5 rounded" />
                        </div>
                        <div className="space-y-4">
                            <div className="h-2 w-full bg-white/5 rounded" />
                            <div className="h-12 w-12 rounded-full bg-white/5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Conversion CTA */}
            <div className="col-span-12 lg:col-span-5 glass p-10 ring-1 ring-[#05fc00]/40 flex flex-col justify-between">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#05fc00] mb-6">Transition to Full Control</h3>
                <p className="text-xs text-white/40 leading-relaxed mb-8 italic">
                    Unlock high-resolution NDVI mapping, irrigation recommendations, and active drone dispatch for your specific farm or forest region.
                </p>
                <button
                    onClick={() => onUpgrade?.('Farm Owner')}
                    className="w-full py-4 bg-[#05fc00] text-[#080809] text-xs font-bold uppercase tracking-[0.4em] hover:bg-white transition-all flex items-center justify-center gap-3"
                >
                    UPGRADE TO FARM OWNER <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Intelligence Loop Tactical Overlay */}
            <IntelligenceLoop
                isOpen={activeScenario !== null}
                scenario={activeScenario}
                onComplete={() => setActiveScenario(null)}
            />

        </div>
    );
};

export default GuestView;
