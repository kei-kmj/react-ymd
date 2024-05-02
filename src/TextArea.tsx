import React, {FC, useState} from "react";
import {BackButton} from "./components/BackButton.tsx";

export const TextArea:FC = () => {
    const [form, setForm] = useState<{comment: string}>({
        comment: ""
    })

    const handleForm = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const show = () => {
        console.log(form.comment)
    }

    return (
        <>
            <h1>TextArea</h1>
            <div>
                <form>
                    <label htmlFor="comment">コメント：</label>
                    <textarea id="comment" name="comment" value={form.comment} onChange={handleForm}/>

                    <button type="button" onClick={show}>送信</button>
                </form>
            </div>
                <div><BackButton /></div>
            </>
            )
            }