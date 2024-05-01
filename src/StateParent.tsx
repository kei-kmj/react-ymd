import {useState} from "react";
import {StateCounter} from "./StateCounter.tsx";

export const StateParent = () => {
    const [count, setCount] = useState(0)
    const update = (step: number) => setCount(c => Math.max(c + step, 0))

    return (
        <>
            <p>総カウント：{count}</p>
            <StateCounter step={1} onUpdate={update}/>
            <StateCounter step={5} onUpdate={update}/>
            <StateCounter step={-1} onUpdate={update}/>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}