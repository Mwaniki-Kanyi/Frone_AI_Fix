import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TreeDeciduous, ShieldCheck, DollarSign, BarChart2, Zap, Target, Globe } from 'lucide-react';
import IntelligenceLoop from '../../IntelligenceLoop';

const GrowthMetric = ({ label, value, subtext, icon: Icon }) => (
    <div className="p-8 glass ring-1 ring-white/5 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-full bg-[#05fc00]/5 ring-1 ring-[#05fc00]/20">
                <Icon className="w-6 h-6 text-[#05fc00]" strokeWidth={1.5} />
            </div>
            <div className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[8px] rounded uppercase font-bold tracking-widest">Scaling</div>
        </div>
        <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 block mb-2">{label}</span>
            <span className="text-4xl font-light tracking-tight mb-2 block">{value}</span>
            <p className="text-[10px] text-white/40 uppercase tracking-widest italic">{subtext}</p>
        </div>
    </div>
);

const InvestorView = () => {
    const [activeInjection, setActiveInjection] = useState(null);

    const injectScenario = (id) => {
        setActiveInjection(id);
    };
    return (
        <div className="grid grid-cols-12 gap-6 pb-20">

            {/* Executive Snapshot */}
            <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-6">
                <GrowthMetric
                    label="Forest Loss Prevented"
                    value="1,842 Ha"
                    subtext="Estimated 420k tons CO2 Offset"
                    icon={TreeDeciduous}
                />
                <GrowthMetric
                    label="Farmer Revenue Growth"
                    value="+28.4%"
                    subtext="Aggregate across 142 integrated farms"
                    icon={TrendingUp}
                />
                <GrowthMetric
                    label="Media Subsidy Contribution"
                    value="KES 4.8M"
                    subtext="Synthesized from anonymized sensor data"
                    icon={DollarSign}
                />
            </div>

            {/* Narrative & Moat Panel */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">

                {/* Scalability Digital Twin */}
                <div className="flex-1 glass ring-1 ring-[#05fc00]/20 p-8 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[#05fc00]/5 -z-10" />
                    <div className="flex justify-between items-start mb-12">
                        <div>
                            <span className="text-xs uppercase tracking-[0.3em] text-[#05fc00] mb-4 block underline underline-offset-8">Data Flywheel</span>
                            <h2 className="text-4xl font-light mb-4">Protecting <span className="font-serif italic organic-text">Scale</span></h2>
                            <p className="text-white/40 max-w-md text-sm font-light leading-relaxed">
                                As sensor density increases, ML verification time drops, attracting more media licensing interest, which in turn subsidizes hardware deployment for smaller farms.
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase block mb-1">Regional Expansion</span>
                            <span className="text-xs font-mono text-[#05fc00]">EAST AFRICA » CONGO BASIN</span>
                        </div>
                    </div>

                    {/* Interactive Simulation Panel */}
                    <div className="flex-1 border border-white/5 rounded-lg bg-[#080809]/40 p-8 flex flex-col justify-center gap-12">
                        <span className="text-[10px] uppercase text-center tracking-[0.5em] text-white/20">Operational Simulation Gateway</span>
                        <div className="flex justify-center gap-8">
                            {[
                                { label: 'Wildfire', icon: Zap },
                                { label: 'Logging', icon: ShieldCheck },
                                { label: 'Charcoal', icon: Target }
                            ].map((sim, i) => (
                                <button
                                    key={i}
                                    onClick={() => injectScenario(sim.label)}
                                    disabled={activeInjection !== null}
                                    className="group flex flex-col items-center gap-3"
                                >
                                    <div className={`w-16 h-16 rounded-full glass ring-1 transition-all duration-500 flex items-center justify-center ${activeInjection === sim.label ? 'ring-[#05fc00] bg-[#05fc00]/20 shadow-[0_0_20px_#05fc0033]' : 'ring-white/10 group-hover:ring-[#05fc00]/50'}`}>
                                        <sim.icon className={`w-6 h-6 transition-colors ${activeInjection === sim.label ? 'text-[#05fc00]' : 'text-white/40 group-hover:text-[#05fc00]'}`} />
                                    </div>
                                    <span className={`text-[10px] uppercase tracking-widest transition-colors ${activeInjection === sim.label ? 'text-[#05fc00] font-bold' : 'text-white/20 group-hover:text-white'}`}>
                                        {activeInjection === sim.label ? 'Injected' : `Inject ${sim.label}`}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <p className="text-center text-[10px] text-[#05fc00] italic uppercase tracking-[0.2em] h-4">
                            {activeInjection ? `Real-time validation cycle active for ${activeInjection}` : 'Validate real-time drone-sensor consensus architecture'}
                        </p>
                    </div>
                </div>

                {/* Business Metrics */}
                <div className="h-1/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: 'ARR Growth', value: '142%', trend: 'MoM' },
                        { label: 'LTV / CAC', value: '4.8x', trend: 'Healthy' },
                        { label: 'Churn Rate', value: '0.8%', trend: 'Minimal' }
                    ].map((metric, i) => (
                        <div key={i} className="p-6 glass ring-1 ring-white/5 hover:bg-white/[0.02] transition-all">
                            <span className="text-[10px] uppercase tracking-widest text-white/20 block mb-2">{metric.label}</span>
                            <div className="flex justify-between items-end">
                                <span className="text-2xl font-light">{metric.value}</span>
                                <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-widest mb-1">{metric.trend}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Impact & ESG */}
            <div className="col-span-12 lg:col-span-6 glass ring-1 ring-white/10 p-10 flex flex-col justify-between min-h-[300px]">
                <div className="flex justify-between items-start mb-8">
                    <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#05fc00] flex items-center gap-2">
                        <Globe className="w-4 h-4" /> Global Impact Narrative
                    </h3>
                    <BarChart2 className="w-5 h-5 text-white/20" />
                </div>
                <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-white/5 pb-2">
                        <span className="text-xs text-white/50">CO₂ Avoided</span>
                        <span className="text-lg font-mono">1.2M Tons</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/5 pb-2">
                        <span className="text-xs text-white/50">Jobs Augmented</span>
                        <span className="text-lg font-mono">842</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/5 pb-2">
                        <span className="text-xs text-white/50">Ecosystem Recovery</span>
                        <span className="text-lg font-mono text-emerald-400">Stable</span>
                    </div>
                </div>
                <p className="mt-8 text-[10px] text-white/30 italic uppercase tracking-widest leading-relaxed">
                    Protecting the Congo Basin & beyond via autonomous regional surveillance.
                </p>
            </div>

            {/* Investor Documentation */}
            <div className="col-span-12 lg:col-span-6 glass ring-1 ring-[#05fc00]/10 p-10 flex flex-col justify-between">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white/50 mb-8">Defensibility & Moat</h3>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#05fc00] mt-1 shadow-[0_0_5px_#05fc00]" />
                        <p className="text-xs text-white/60 leading-relaxed"><span className="text-white font-bold">Proprietary Consensus Engine</span>: Reduces false drone dispatches by 27% compared to single-sensor systems.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#05fc00] mt-1 shadow-[0_0_5px_#05fc00]" />
                        <p className="text-xs text-white/60 leading-relaxed"><span className="text-white font-bold">Data Economic Flywheel</span>: Exclusive datasets for agricultural insurance & climate research.</p>
                    </div>
                </div>
                <div className="flex gap-4 mt-8">
                    <button className="flex-1 py-3 glass ring-1 ring-[#05fc00]/40 text-[#05fc00] text-[10px] uppercase tracking-widest font-bold hover:bg-[#05fc00]/5 transition-all">
                        View Pitch Deck
                    </button>
                    <button className="flex-1 py-3 glass ring-1 ring-white/10 text-white/60 text-[10px] uppercase tracking-widest font-bold hover:ring-white/30 transition-all">
                        Cap Table
                    </button>
                </div>
            </div>

            {/* Intelligence Loop Tactical Overlay */}
            <IntelligenceLoop
                isOpen={activeInjection !== null}
                scenario={activeInjection}
                onComplete={() => setActiveInjection(null)}
            />

        </div>
    );
};

export default InvestorView;
