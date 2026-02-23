import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Info, Layers, Zap, ShieldCheck } from 'lucide-react';

const Card = ({ title, content, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
        className="p-8 glass ring-1 ring-white/5 hover:ring-white/20 transition-all duration-500 flex flex-col gap-4"
    >
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#05fc00]" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-medium text-[#05fc00]">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{content}</p>
    </motion.div>
);

const SectionHeader = ({ tag, title, description }) => (
    <div className="mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-[#05fc00] mb-4 block">{tag}</span>
        <h2 className="text-4xl md:text-5xl font-light mb-6">
            {title}
        </h2>
        <p className="text-white/50 max-w-2xl text-lg font-light leading-relaxed">
            {description}
        </p>
    </div>
);

const AboutSection = () => {
    return (
        <div className="w-full bg-[#080809] px-8 md:px-16 py-32 z-20 relative overflow-hidden">
            {/* Background Decorative Blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a2f23] rounded-full blur-[150px] opacity-20 -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#05fc00] rounded-full blur-[150px] opacity-10 -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Intro */}
                <section id="about" className="mb-32">
                    <SectionHeader
                        tag="Origins"
                        title={<>Dual Intelligence: <br /><span className="font-serif italic organic-text">Farms & Forests</span></>}
                        description="Frone AI is an agricultural intelligence platform designed for regions where productive land and vulnerable forests exist side by side. We turn blind zones into data-rich environments."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card
                            icon={Target}
                            title="Our Mission"
                            content="Empowering land users with real-time insight and early warning, allowing them to manage agricultural land sustainably while preventing deforestation before it escalates."
                            delay={0.1}
                        />
                        <Card
                            icon={Eye}
                            title="Our Vision"
                            content="To become the trusted land-intelligence layer across Africa, enabling agriculture and conservation to work together instead of competing."
                            delay={0.2}
                        />
                        <Card
                            icon={Info}
                            title="Why We Exist"
                            content="Shifting land management from reactive and manual to predictive and autonomous, addressing constraints like high monitoring costs and late detection."
                            delay={0.3}
                        />
                    </div>
                </section>

                {/* How it Works */}
                <section id="process" className="mb-32">
                    <SectionHeader
                        tag="Methodology"
                        title={<>The <span className="font-serif italic organic-text">Intelligence</span> Loop</>}
                        description="Our platform combines ground-based sensors, autonomous drones, and AI-driven decision systems into a single, cohesive ecosystem."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Foundation", content: "Agricultural insights for vegetation health and crop stress.", icon: Layers },
                            { title: "Detection", content: "Consensus-based sensor arrays detecting environmental signals.", icon: Zap },
                            { title: "Verification", content: "Autonomous drone dispatch for visual confirmation and live feeds.", icon: ShieldCheck },
                            { title: "Decision", content: "AI evaluates context to classify events and route alerts.", icon: Target }
                        ].map((item, i) => (
                            <Card key={i} title={item.title} content={item.content} icon={item.icon} delay={i * 0.1} />
                        ))}
                    </div>
                </section>

                {/* Impact */}
                <section id="impact" className="mb-16">
                    <div className="p-12 glass ring-1 ring-[#05fc00]/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[#1a2f23] opacity-30 -z-10" />
                        <SectionHeader
                            tag="Outcomes"
                            title="Sustaining Life Through Intelligence"
                            description="We start with agriculture because productive land sustains livelihoods, and we extend into forest protection because healthy ecosystems sustain agriculture."
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 border-t border-white/10 pt-12">
                            <div>
                                <h4 className="text-[#05fc00] font-semibold mb-2">Agricultural Impact</h4>
                                <p className="text-white/40 text-sm">Higher yields through early detection of crop stress and optimized land inputs.</p>
                            </div>
                            <div>
                                <h4 className="text-[#05fc00] font-semibold mb-2">Environmental Impact</h4>
                                <p className="text-white/40 text-sm">Faster detection of wildfires, reduced illegal logging and charcoal burning.</p>
                            </div>
                            <div>
                                <h4 className="text-[#05fc00] font-semibold mb-2">Economic Impact</h4>
                                <p className="text-white/40 text-sm">Lower monitoring costs and reduced risk to human patrols through automation.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutSection;
