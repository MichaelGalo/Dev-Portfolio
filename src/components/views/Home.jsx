import { useState } from "react";

export const Home = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-4">
            <h1 className="text-3xl font-bold mb-4">Michael Galo Developer Portfolio</h1>
                <div className="card bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <button 
                    className="p-2 bg-blue-500 dark:bg-blue-700 text-white rounded-full"
                    onClick={() => setCount(count + 1)}
                    >
                        Click Me
                    </button>
                </div>
      </div>
    );
};