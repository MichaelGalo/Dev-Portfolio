import { useState } from "react";

export const Home = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Michael Galo Developer Portfolio</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    );
};