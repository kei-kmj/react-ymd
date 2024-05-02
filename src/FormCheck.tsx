import {BackButton} from "./components/BackButton.tsx";
import React, {FC, useState} from "react";

export const FormCheck: FC = () => {
    const [form, setForm] = useState<{ agreement: boolean }>({
        agreement: false

    })
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    return (
        <>
            <h1>FormCheck</h1>
            <div>
                <form>
                    <label htmlFor="agreement">利用規約に同意する</label>
                    <input type="checkbox" id="agreement" name="agreement" checked={form.agreement}
                           onChange={handleForm}/>
                    <button type="button" onClick={() => console.log(form)}>送信</button>
                </form>
            </div>
            <div><BackButton/></div>
        </>)

}