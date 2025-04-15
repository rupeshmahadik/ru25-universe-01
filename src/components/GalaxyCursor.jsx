import { useEffect } from "react";

function GalaxyCursor() {
    useEffect(() => {
        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");

        canvas.style.position = "fixed";
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = 999;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = [];

        document.addEventListener("mousemove", (e) => {
            stars.push({
                x: e.clientX,
                y: e.clientY,
                alpha: 1,
                size: Math.random() * 2 + 1,
            });
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star, i) => {
                star.alpha -= 0.01;
                if (star.alpha <= 0) stars.splice(i, 1);
                else {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
                    ctx.fill();
                }
            });
            requestAnimationFrame(animate);
        };

        animate();

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            document.body.removeChild(canvas);
        };
    }, []);

    return null;
}

export default GalaxyCursor;
