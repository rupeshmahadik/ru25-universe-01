import { Link } from 'react-router-dom';


import { useEffect } from 'react';


function Home() {
    useEffect(() => {
        const canvas = document.getElementById('starfield');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = Array.from({ length: 200 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
        }));

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fill();
                star.x += star.dx;
                star.y += star.dy;

                // Bounce off edges
                if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
                if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
            });
            requestAnimationFrame(draw);
        }

        draw();
    }, []);


    return (
        <div className="relative h-screen w-full overflow-hidden bg-black text-white flex flex-col items-center justify-center">
            {/* Starfield background */}
            <div className="absolute inset-0 z-0">
                <canvas id="starfield" className="w-full h-full" />
            </div>

            {/* Overlay Content */}
            <div className="z-10 text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Dev Universe</h1>
                {/* <p className="text-lg md:text-2xl text-gray-300">Explore my world of code</p> */}

                {/* "Planets" (Nav Buttons) */}
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                    <Link to="/about" className="planet-button">🌍 About</Link>
                    <Link to="/projects" className="planet-button">🚀 Projects</Link>
                    <Link to="/skills" className="planet-button">🛠 Skills</Link>
                    <Link to="/contact" className="planet-button">📡 Contact</Link>
                </div>


            </div>
        </div>
    );
}

export default Home;
