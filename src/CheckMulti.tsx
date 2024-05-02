import React, {FC, useState} from "react";
import {BackButton} from "./components/BackButton.tsx";


export const CheckMulti:FC = () => {
    const [form, setForm] = useState<{ fruit: string[] }>({
        fruit: []
    })

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fruit_data = form.fruit

        if (e.target.checked) {
            fruit_data.push(e.target.value)
        } else {
            fruit_data.splice(fruit_data.indexOf(e.target.value), 1)
        }
        setForm({
            ...form,
            [e.target.name]: fruit_data
        })
    }
    return (
        <>
            <h1>CheckMulti</h1>
            <div>
                <form>
                    <fieldset>
                        <legend>好きな果物：</legend>
                        <input type="checkbox" id="apple" name="fruit" value="apple"
                               checked={form.fruit.includes("apple")}
                               onChange={handleForm}/>
                        <label htmlFor="apple">りんご</label>
                        <input type="checkbox" id="orange" name="fruit" value="orange"
                               checked={form.fruit.includes("orange")}
                               onChange={handleForm}/>
                        <label htmlFor="orange">オレンジ</label>
                        <input type="checkbox" id="grape" name="fruit" value="grape"
                               checked={form.fruit.includes("grape")}
                               onChange={handleForm}/>
                        <label htmlFor="grape">ぶどう</label>
                        <input type="checkbox" id="peach" name="fruit" value="peach"
                               checked={form.fruit.includes("peach")}
                               onChange={handleForm}/>
                        <label htmlFor="peach">もも</label>
                        <input type="checkbox" id="melon" name="fruit" value="melon"
                               checked={form.fruit.includes("melon")}
                               onChange={handleForm}/>
                        <label htmlFor="melon">メロン</label>
                    </fieldset>
                    <button type="button" onClick={() => console.log(form)}>送信</button>
                </form>
            </div>
            <div><BackButton/></div>
        </>
    )

}