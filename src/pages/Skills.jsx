import { motion } from "framer-motion";


function Skills() {
    const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Git', 'Responsive Design'];

    return (
        <motion.div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">🛠 Skills</h1>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
                {skills.map((skill) => (
                    <span key={skill} className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-400 transition">
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default Skills;
