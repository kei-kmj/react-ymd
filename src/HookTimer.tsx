import {BackButton} from "./components/BackButton.tsx";
import {FC, useEffect, useState} from "react";


type HookTimerProps = {
    init: number
}
export const HookTimer:FC<HookTimerProps> = ({init}) => {
    const [count, setCount] = useState(init)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (<>
            <div>
                <h1>HookTimer</h1>
                <p>{count}</p>
            </div>
            <BackButton/>
        </>
    )
}