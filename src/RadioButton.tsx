import {useState} from "react";
import {BackButton} from "./components/BackButton.tsx";

export const FormRadio = () => {
    const [form, setForm] = useState<{ fruit: string }>({
        fruit: "apple"
    })
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <h1>FormRadio</h1>
            <div>
                <fieldset>
                    <legend>好きな果物：</legend>

                    <input type="radio" id="apple" name="fruit" value="apple" checked={form.fruit === "apple"}
                           onChange={handleForm}/>
                    <label htmlFor="apple">りんご</label>
                    <input type="radio" id="orange" name="fruit" value="orange" checked={form.fruit === "orange"}
                           onChange={handleForm}/>
                    <label htmlFor="orange">オレンジ</label>

                    <input type="radio" id="grape" name="fruit" value="grape" checked={form.fruit === "grape"}
                           onChange={handleForm}/>
                    <label htmlFor="grape">ぶどう</label>

                    <input type="radio" id="peach" name="fruit" value="peach" checked={form.fruit === "peach"}
                           onChange={handleForm}/>
                    <label htmlFor="peach">もも</label>

                    <input type="radio" id="melon" name="fruit" value="melon" checked={form.fruit === "melon"}
                           onChange={handleForm}/>
                    <label htmlFor="melon">メロン</label>
                </fieldset>
                <button type="button" onClick={() => console.log(form)}>送信</button>
            </div>
            <div><BackButton/></div>
        </>
    )
}