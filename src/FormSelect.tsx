import React, {FC, useState} from "react";
import {BackButton} from "./components/BackButton.tsx";

export const FormSelect:FC = () => {
    const [form, setForm] = useState<{fruit:string}>({
        fruit: "apple"
    })

    const handleForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            })
    }
    const show = () => {
        console.log(form)

    }
    return (
        <>
            <h1>FormSelect</h1>
            <div>
                <form>
                    <label htmlFor="fruit">好きな果物：</label>
                    <select id="fruit" name="fruit" value={form.fruit} onChange={handleForm}>
                        <option value="apple">りんご</option>
                        <option value="orange">オレンジ</option>
                        <option value="grape">ぶどう</option>
                        <option value="peach">もも</option>
                        <option value="melon">メロン</option>
                    </select>
                    <button type="button" onClick={show}>送信</button>
                </form>
            </div>
            <div><BackButton /></div>
        </>
    )
}