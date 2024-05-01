import React from "react";
import {BackButton} from "./components/BackButton.tsx";


export const EventDate = () => {
    const current = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
        const d = new Date()
        switch (type) {
            case 'date':
                console.log(`${(e.target as HTMLElement).id}: ${d.toLocaleDateString()}`)
                break
            case 'time':
                console.log(`${(e.target as HTMLElement).id}: ${d.toLocaleTimeString()}`)
                break
            default:
                console.log(`${(e.target as HTMLElement).id}: ${d.toLocaleString()}`)
                break
        }
    }
    return (
        <>
            <h1>EventDate</h1>
            <button id="datetime" onClick={(e) => current(e, 'datetime')}>現在日時</button>
            <button id="date" onClick={(e) => current(e, 'date')}>現在日付</button>
            <button id="time" onClick={(e) => current(e, 'time')}>現在時刻</button>
            <div>
                <BackButton/>
            </div>
        </>
    )
}