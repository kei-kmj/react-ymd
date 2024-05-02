import {FC, useRef, useState} from "react";
import {BackButton} from "./components/BackButton.tsx";

export const UCForm:FC = () => {
    // useRefで要素に紐づける場合、初期値はnull
    // Refオブジェクトに要素を紐づけるのはref属性の役割
    const name = useRef<HTMLInputElement>(null)
    const age = useRef<HTMLInputElement>(null)
    const [selectedData, setSelectedData] = useState<string>("")
    const show = () => {
        console.log(`こんにちは、${name.current?.value} ${age.current?.value}さん`)
    }

    const handleDataChange = () => {
        setSelectedData(`${name.current?.value} さん、${age.current?.value} 歳`);
    }
    return (
        <>
            <h1>UCForm</h1>
            <div>
                <label htmlFor="name">名前：</label>
                <input type="text" id="name" ref={name} defaultValue="kei-kmj" onChange={handleDataChange}/>
            </div>
            <div>
                <label htmlFor="age">年齢：</label>
                <input type="number" id="age" ref={age} defaultValue="22" onChange={handleDataChange}/>
            </div>
            <button onClick={show}>送信</button>

            <p>こんにちは、{selectedData}</p>

            <div>
                 <BackButton/>
            </div>
        </>
    )

}