import React from "react";
import { motion } from 'motion/react';
import { ArrowRight, Factory, Shield, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';

function HomeHero() {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    const goToServices = () => {
        navigate('/services');
        window.scrollTo(0, 0);
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0446F2] via-[#0446F2]/90 to-[#FF9136] relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl text-[#FFFFF2] mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Advanced Food Processing <span className="text-[#FF9136]">Machinery</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-[#FFFFF2]/90 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Leading manufacturer of high-quality food processing equipment. From tomato processing to seafood canning, we deliver precision engineering for your production needs.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Button
                                size="lg"
                                className="bg-[#FF9136] hover:bg-[#FF9136]/90 text-white"
                                onClick={goToContact}
                            >
                                Contact Us <ArrowRight className="ml-2" size={20} />
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-[#0446F2] bg-[#0446F2] text-[#0446F2] hover:bg-[#0446F2]/90 bg-white hover:text-white"
                                onClick={goToServices}
                            >
                                View Services
                            </Button>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            className="grid grid-cols-3 gap-6 mt-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {[
                                { icon: Factory, label: 'Industry Experience' },
                                { icon: Shield, label: 'Quality Assured' },
                                { icon: Zap, label: 'Fast Delivery' },
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature.label}
                                    className="text-center"
                                    whileHover={{ scale: 1.1 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                >
                                    <feature.icon className="w-8 h-8 text-[#FF9136] mx-auto mb-2" />
                                    <p className="text-sm text-[#FFFFF2]">{feature.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <motion.div
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1760938580105-3bad290397dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZm9vZCUyMHByb2Nlc3NpbmclMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzYyNzAzODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Food Processing Machinery"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0446F2]/50 to-transparent"></div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );

}

export default HomeHero;
