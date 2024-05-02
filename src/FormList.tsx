import {FC, useState} from "react";
import {BackButton} from "./components/BackButton.tsx";

export const FormList: FC = () => {
    const [form, setForm] = useState<{ fruit: string[] }>({
        fruit: ["apple", "orange", "grape", "peach", "melon"]
    })

    const handleForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const data = []

        const options = e.target.options

        for (const option of options) {
            if (option.selected) {
                data.push(option.value)
            }
        }

        setForm(
            {
                ...form,
                [e.target.name]: data
            })
    }
    const show = () => {
        console.log(form)
    }
    return (
        <>
            <h1>FormList</h1>
            <div>
                <form>
                    <label htmlFor="fruit">好きな果物：</label>
                    <select id="fruit" name="fruit" multiple={true} value={form.fruit} onChange={handleForm}>
                        <option value="apple">りんご</option>
                        <option value="orange">オレンジ</option>
                        <option value="grape">ぶどう</option>
                        <option value="peach">もも</option>
                        <option value="melon">メロン</option>
                    </select>
                    <button type="button" onClick={show}>送信</button>
                </form>
            </div>
            <div><BackButton/></div>
        </>)
}