import { motion } from "framer-motion";

function Projects() {
    return (
        <motion.div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">🚀 Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {/* Example Project Cards */}
                <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition">
                    <h2 className="text-xl font-bold mb-2">🌌 Space Portfolio</h2>
                    <p>A cool React site themed around space & creativity.</p>
                </div>
                <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition">
                    <h2 className="text-xl font-bold mb-2">🛸 UFO Chatbot</h2>
                    <p>A quirky chatbot built with React + Tailwind.</p>
                </div>
                {/* Add more */}
            </div>
        </motion.div>
    );
}

export default Projects;
