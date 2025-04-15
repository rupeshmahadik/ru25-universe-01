import { useEffect, useState } from 'react';

function LaunchScreen({ onFinish }) {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFade(true), 2000); // show for 2s
        const cleanup = setTimeout(() => onFinish(), 3000);  // fade out at 3s
        return () => {
            clearTimeout(timer);
            clearTimeout(cleanup);
        };
    }, []);

    return (
        <div className={`fixed inset-0 bg-black text-white flex items-center justify-center transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'} z-50`}>
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">🚀 Launching...</h1>
                <p className="text-gray-400">Initializing Dev Universe</p>
            </div>
        </div>
    );
}

export default LaunchScreen;
