import { motion } from "framer-motion";

function About() {
    return (
        <motion.div
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">👨‍🚀 About Me</h1>

            <div className="bg-white text-black max-w-xl p-6 rounded-2xl shadow-2xl animate-float">
                <p className="text-lg mb-4">
                    Hey, I’m <strong>Your Name</strong> — a frontend developer who loves building interactive web experiences with React 🚀.
                </p>
                <p className="text-lg">
                    I enjoy creating fun, user-friendly interfaces, exploring animations, and learning new tech. When I’m not coding, I’m probably sketching, gaming, or dreaming of stars 🌌.
                </p>
            </div>

            <img
                src="/src/assets/planets/planet1.svg"
                alt="avatar"
                className="w-32 h-32 mt-8 animate-float-slow"
            />
        </motion.div>
    );
}

export default About;
