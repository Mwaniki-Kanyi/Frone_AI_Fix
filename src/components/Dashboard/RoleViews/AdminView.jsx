import React from 'react';
import { motion } from 'framer-motion';
import { Database, Shield, Zap, Info, BarChart3, Users, FileText, Lock } from 'lucide-react';

const MetricLine = ({ label, value, percentage }) => (
    <div className="flex flex-col gap-2">
        <div className="flex justify-between items-end">
            <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{label}</span>
            <span className="text-xs font-mono text-[#05fc00]">{value}</span>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#05fc00]/40 transition-all duration-1000" style={{ width: `${percentage}%` }} />
        </div>
    </div>
);

const AdminView = () => {
    const [isFlushing, setIsFlushing] = React.useState(false);

    const handleFlush = () => {
        setIsFlushing(true);
        setTimeout(() => setIsFlushing(false), 3000);
    };
    return (
        <div className="grid grid-cols-12 gap-6 pb-20">

            {/* Global Health KPIs */}
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                    { label: "Total Acres", value: "48.2k", icon: Database },
                    { label: "Active Farms", value: "142", icon: Users },
                    { label: "Sensors Online", value: "8,241", icon: Zap },
                    { label: "Drone Fleet", value: "28", icon: Shield },
                    { label: "Incidents Today", value: "12", icon: Info }
                ].map((stat, i) => (
                    <div key={i} className="p-6 glass ring-1 ring-white/5 hover:ring-[#05fc00]/20 transition-all duration-500">
                        <stat.icon className="w-5 h-5 text-[#05fc00]/60 mb-4" strokeWidth={1.5} />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mb-1">{stat.label}</span>
                        <span className="text-2xl font-light tracking-tight">{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* ML Performance Metrics */}
            <div className="col-span-12 lg:col-span-4 glass ring-1 ring-white/10 p-8 flex flex-col">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#05fc00] mb-8 border-b border-white/5 pb-4 flex justify-between items-center">
                    ML Precision Engine
                    <span className="text-[8px] bg-[#4a5d4e]/20 text-[#4a5d4e] px-2 py-1 rounded">OPTIMIZED</span>
                </h3>
                <div className="flex flex-col gap-6">
                    <MetricLine label="Fire Detection Precision" value="94.2%" percentage={94.2} />
                    <MetricLine label="Logging Detection Recall" value="91.8%" percentage={91.8} />
                    <MetricLine label="Charcoal Consensus Sync" value="92.4%" percentage={92.4} />
                    <MetricLine label="Non-Relevant Filter" value="88.1%" percentage={88.1} />
                </div>

                <div className="mt-auto pt-8 border-t border-white/5">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] uppercase text-white/20 tracking-widest font-bold">Avg Validation Time</span>
                        <span className="text-lg font-light text-emerald-400">18.4s</span>
                    </div>
                    <p className="text-[10px] text-white/30 italic uppercase leading-relaxed">System-wide consensus achieved via 3.4 nodes per event.</p>
                </div>
            </div>

            {/* Revenue & Media Marketplace */}
            <div className="col-span-12 lg:col-span-8 glass ring-1 ring-white/10 p-8">
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                    <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#05fc00] flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" /> Global Financial Ecosystem
                    </h3>
                    <div className="flex gap-4">
                        <button className="text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors font-bold">Invoices</button>
                        <button className="text-[10px] text-[#05fc00] underline underline-offset-4 uppercase tracking-widest font-bold">Ledger</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div>
                            <span className="text-[10px] uppercase text-white/30 tracking-widest block font-bold mb-2">Platform Revenue (ARR)</span>
                            <span className="text-4xl font-serif italic organic-text">$4.2M</span>
                        </div>
                        <div className="p-4 glass ring-1 ring-white/5 space-y-3">
                            <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
                                <span className="text-white/40">Subscription Streams</span>
                                <span className="text-white/70">62%</span>
                            </div>
                            <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
                                <span className="text-white/40">Media Licensing</span>
                                <span className="text-white/70">28%</span>
                            </div>
                            <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
                                <span className="text-white/40">Field Services</span>
                                <span className="text-white/70">10%</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-white/30 tracking-widest block font-bold mb-4">Marketplace Activity</span>
                        <div className="flex-1 space-y-4">
                            {[
                                { user: "F-120 Nairobi", amount: "+840 KES", type: "Thermal Data Sync" },
                                { user: "F-042 Rift Valley", amount: "+1,220 KES", type: "NDVI Export" },
                                { user: "F-088 Coastal", amount: "+610 KES", type: "Audio Pattern Licensing" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-3 border border-white/5 rounded">
                                    <div>
                                        <span className="text-[10px] font-bold text-white/60 block">{item.user}</span>
                                        <span className="text-[8px] uppercase tracking-widest text-white/30">{item.type}</span>
                                    </div>
                                    <span className="text-xs font-mono text-emerald-400">{item.amount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* User & Role Management */}
            <div className="col-span-12 lg:col-span-6 glass ring-1 ring-white/10 p-8">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Personnel & Compliance
                </h3>
                <div className="grid grid-cols-2 gap-8">
                    <div className="p-4 glass rounded border border-white/5">
                        <span className="text-2xl font-light block mb-1">1,402</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold italic">Registered Operators</span>
                    </div>
                    <div className="p-4 glass rounded border border-white/5">
                        <span className="text-2xl font-light block mb-1">100%</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold italic">KYC Compliance</span>
                    </div>
                </div>
                <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-3 text-[10px] text-white/50 uppercase tracking-widest font-bold">
                        <Lock className="w-3 h-3" /> <span>Data retention: 5 Years enabled</span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-white/50 uppercase tracking-widest font-bold">
                        <FileText className="w-3 h-3" /> <span>Audit Log: Syncing...</span>
                    </div>
                </div>
            </div>

            {/* System Integrity Log */}
            <div className="col-span-12 lg:col-span-6 glass ring-1 ring-white/10 p-8 flex flex-col justify-between">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6">Regional Integrity Awareness</h3>
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                    <p className="text-xs text-emerald-400/80 leading-relaxed italic">
                        "System is currently synchronized with Kenya Forestry Service (KFS) API and local regional regulations for drone deployment in Alpha zones."
                    </p>
                </div>
                <div className="flex justify-between items-end mt-8">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-1">Last Global Check</span>
                        <span className="text-xs font-mono text-white/60">{isFlushing ? 'SYNCING...' : '06-02-2026 23:59:12 UTC'}</span>
                    </div>
                    <button
                        onClick={handleFlush}
                        disabled={isFlushing}
                        className={`px-6 py-2 border text-[10px] uppercase tracking-widest font-bold transition-all ${isFlushing ? 'border-[#05fc00] text-[#05fc00] animate-pulse' : 'border-white/10 text-white/40 hover:text-white'}`}
                    >
                        {isFlushing ? 'FLUSHING...' : 'System Flush'}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AdminView;
