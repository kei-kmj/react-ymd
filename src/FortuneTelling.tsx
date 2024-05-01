import {FC, useState} from "react";
import {BackButton} from "./components/BackButton.tsx";

export const FortuneTelling:FC = () => {
    const [clicked, setClicked] = useState<boolean>(false)
    const [result, setResult] = useState<string>("-")
    const handleClick = () => {
        if (!clicked) {
            setResult(Math.floor(Math.random() * 100 + 1).toString())
            setClicked(true)
        }
    }
    return (
        <>
            <h1>FortuneTelling</h1>
            <button onClick={handleClick}>占う</button>
            <p>今日の運勢：{result}点です</p>
            <div>
                <BackButton/>
            </div>
        </>
    )
}