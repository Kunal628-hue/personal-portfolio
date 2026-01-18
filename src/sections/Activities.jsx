import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, TrendingUp, Award, Trophy, Activity } from 'lucide-react';

const ActivityCard = ({ title, description, icon: Icon, color, delay, tags }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors overflow-hidden h-full flex flex-col"
        >
            <div className={`absolute -right-10 -top-10 w-32 h-32 bg-${color}-500/10 rounded-full blur-3xl group-hover:bg-${color}-500/20 transition-colors`} />

            <div className={`w-14 h-14 rounded-2xl bg-${color}-500/20 flex items-center justify-center mb-6 text-${color}-400 group-hover:scale-110 transition-transform`}>
                <Icon size={32} />
            </div>

            <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-white group-hover:to-white transition-all">
                {title}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                {description}
            </p>

            {tags && (
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-white/10 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

const Activities = () => {
    return (
        <section id="activities" className="py-20 bg-black text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Activities <span className="text-purple-500">&</span> Interests</h2>
                    <p className="text-gray-400">Whatever makes my heart beat faster.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Hackathons */}
                    <div className="lg:col-span-2">
                        <ActivityCard
                            title="Hackathons"
                            description="Thriving in high-pressure environments to build rapid prototypes. I love the chaos of innovation and the satisfaction of a working demo after 24 hours."
                            icon={Code}
                            color="blue"
                            delay={0}
                            tags={["Innovation", "Rapid Prototyping", "Teamwork"]}
                        />
                    </div>

                    {/* Communities */}
                    <ActivityCard
                        title="Tech Communities"
                        description="Active participant in dev communities, sharing knowledge and learning from peers."
                        icon={Users}
                        color="green"
                        delay={0.1}
                        tags={["Networking", "Mentorship"]}
                    />

                    {/* Trading */}
                    <ActivityCard
                        title="Market Markets"
                        description="Exploring financial markets through a technical lens. Learning chart patterns and market psychology as a personal interest."
                        icon={TrendingUp}
                        color="yellow"
                        delay={0.2}
                        tags={["Technical Analysis", "Learning", "Economics"]}
                    />

                    {/* Leadership */}
                    <ActivityCard
                        title="Leadership"
                        description="Taking initiative in student clubs and project teams. I believe in leading by example and empowering others."
                        icon={Award}
                        color="red"
                        delay={0.3}
                        tags={["Team Lead", "Organizer", "Initiative"]}
                    />

                    {/* Sports */}
                    <div className="lg:col-row-span-2">
                        <ActivityCard
                            title="Sports"
                            description="Maintaining a competitive spirit and physical discipline on the field."
                            icon={Trophy}
                            color="orange"
                            delay={0.4}
                            tags={["Cricket", "Football", "Badminton"]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
