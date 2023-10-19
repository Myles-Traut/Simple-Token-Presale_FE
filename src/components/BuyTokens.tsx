import { useState } from "react";

import Button from "./Button";

export default function BuyTokens() {
    const [count, setcount] = useState(0);

    const add = () => setcount((prev) => prev + 1);

    return (
        <div className="container-fluid">
            <h1 className="text-center mt-5">Buy Tokens</h1>
            <h2 className="mt-5 mb-5 text-center">Address: 0x123</h2>
            <h2 className="mt-5 mb-5 text-center">Tokens bought: {count}</h2>
            <div className="text-center">
                <Button title={"BUY"} function={add} />
            </div>
        </div>
    );
};