import {FC, useRef} from "react";
import {BackButton} from "./components/BackButton.tsx";

export const FormFile: FC = () => {
    const fileRef = useRef<HTMLInputElement>(null)

    const show = () => {
        const files = fileRef.current?.files
        if (files) {
            for (const f of files) {
                console.log(f.name)
                console.log(`${Math.trunc(f.size/1024)}KB`)
                console.log(f.type)
            }
        }
    }

    const reset = () => {
        if (fileRef.current) {
            fileRef.current.value = ""
        }
    }

    return (
        <>
            <h1>FormFile</h1>
            <div>
                <form>
                    <input type="file" ref={fileRef} multiple={true}/>
                    <button type="button" onClick={show}>送信</button>
                    <button type="button" onClick={reset}>ファイルリセット</button>
                </form>
            </div>
            <div><BackButton/></div>
        </>
    )
}