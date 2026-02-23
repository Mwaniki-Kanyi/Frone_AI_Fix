import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Zap, ShieldCheck, Target, MessageSquare, FileText, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        id: 'foundation',
        title: 'Phase 1: Foundation',
        subtitle: 'Agricultural Context',
        description: 'Synthesizing soil health and vegetation stress data across Alpha-9 zone.',
        icon: Layers,
        color: '#05fc00'
    },
    {
        id: 'detection',
        title: 'Phase 2: Detection',
        subtitle: 'Consensus Trigger',
        description: 'Audio Consensus and Thermal Mapping identify anomalous signature.',
        icon: Zap,
        color: '#fbbf24'
    },
    {
        id: 'verification',
        title: 'Phase 3: Verification',
        subtitle: 'Drone Dispatch',
        description: 'Autonomous dispatch of D-04 for visual confirmation and live OCR feed.',
        icon: ShieldCheck,
        color: '#ef4444'
    },
    {
        id: 'decision',
        title: 'Phase 4: Decision',
        subtitle: 'Policy Enforcement',
        description: 'AI model confirms threat level. Initiating regional protocol and alert.',
        icon: Target,
        color: '#05fc00'
    }
];

const IntelligenceLoop = ({ isOpen, scenario, onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isAlertSent, setIsAlertSent] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setCurrentStep(0);
            setIsAlertSent(false);

            const interval = setInterval(() => {
                setCurrentStep((prev) => {
                    if (prev < steps.length - 1) return prev + 1;
                    clearInterval(interval);
                    return prev;
                });
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 bg-[#080809]/90 backdrop-blur-xl">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-4xl glass p-8 sm:p-12 relative overflow-hidden border border-[#05fc00]/20"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#05fc00]/5 rounded-full blur-[100px] -mr-32 -mt-32" />

                <div className="flex justify-between items-start mb-12">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.5em] text-[#05fc00] block mb-2 underline underline-offset-8">Intelligence Loop v1.0</span>
                        <h2 className="text-3xl font-light text-white italic">{scenario} Detection Cycle</h2>
                    </div>
                    <button
                        onClick={onComplete}
                        className="text-white/20 hover:text-white transition-colors"
                    >
                        CLOSE
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = index === currentStep;
                        const isCompleted = index < currentStep;

                        return (
                            <div key={step.id} className="relative">
                                <motion.div
                                    initial={false}
                                    animate={{
                                        opacity: isActive || isCompleted ? 1 : 0.2,
                                        scale: isActive ? 1.05 : 1
                                    }}
                                    className={`flex flex-col gap-4 p-4 rounded-xl border transition-all duration-500 ${isActive ? 'border-[#05fc00]/50 bg-[#05fc00]/5 ring-1 ring-[#05fc00]/20' : 'border-white/5'}`}
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isActive ? 'bg-[#05fc00]/10' : 'bg-white/5'}`}>
                                        {isCompleted ? (
                                            <CheckCircle2 className="w-6 h-6 text-[#05fc00]" />
                                        ) : (
                                            <Icon className={`w-6 h-6 ${isActive ? 'text-[#05fc00]' : 'text-white/40'}`} strokeWidth={1.5} />
                                        )}
                                    </div>
                                    <div>
                                        <span className="text-[8px] uppercase tracking-widest text-white/40 block mb-1">{step.subtitle}</span>
                                        <h3 className="text-[10px] font-bold text-white uppercase tracking-wider mb-2">{step.title}</h3>
                                        <p className={`text-[10px] leading-relaxed italic transition-colors ${isActive ? 'text-white/70' : 'text-white/20'}`}>
                                            {step.description}
                                        </p>
                                    </div>

                                    {isActive && (
                                        <motion.div
                                            layoutId="progress"
                                            className="absolute bottom-0 left-0 h-[2px] bg-[#05fc00]"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 3, ease: "linear" }}
                                        />
                                    )}
                                </motion.div>

                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/5" />
                                )}
                            </div>
                        );
                    })}
                </div>

                <AnimatePresence>
                    {currentStep === 3 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="border-t border-white/5 pt-12"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="bg-[#05fc00]/5 border border-[#05fc00]/20 p-6 rounded-2xl relative overflow-hidden">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[#05fc00] flex items-center justify-center">
                                            <MessageSquare className="w-5 h-5 text-[#080809]" fill="currentColor" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-[#05fc00] font-bold block">WhatsApp Alert</span>
                                            <span className="text-xs text-white/80">+254 113 786 674</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-white/60 italic leading-relaxed mb-6">
                                        "[FRONE AI ADVISORY] High-risk {scenario} detected in Alpha-9 zone. Drone D-04 has confirmed the signature. Manual intervention is advised."
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setIsAlertSent(true)}
                                        className={`w-full py-3 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${isAlertSent ? 'bg-emerald-500/20 text-emerald-400' : 'bg-[#05fc00] text-[#080809]'}`}
                                    >
                                        {isAlertSent ? 'PROTOCOL SYNCED' : 'SIMULATE WHATSAPP SEND'}
                                    </motion.button>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Generated Artifacts</h4>
                                    <div className="flex flex-col gap-3">
                                        <button className="flex items-center justify-between p-4 glass ring-1 ring-white/5 hover:ring-white/20 transition-all text-left">
                                            <div className="flex items-center gap-3">
                                                <FileText className="w-4 h-4 text-[#05fc00]" />
                                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Intelligence_Report_{scenario.toUpperCase()}.pdf</span>
                                            </div>
                                            <span className="text-[8px] text-[#05fc00]">DOWNLOAD</span>
                                        </button>
                                        <button className="flex items-center justify-between p-4 glass ring-1 ring-white/5 hover:ring-white/20 transition-all text-left">
                                            <div className="flex items-center gap-3">
                                                <Target className="w-4 h-4 text-red-500" />
                                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Visual_Evidence_D04.mp4</span>
                                            </div>
                                            <span className="text-[8px] text-red-500">SYNCING...</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default IntelligenceLoop;
