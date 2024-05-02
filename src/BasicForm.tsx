import React, {useState} from "react";
import {BackButton} from "./components/BackButton.tsx";

type FormValues = {
    name: string;
    age: number;
}
export const BasicForm = () => {

    // フォームにかかわる値はひとつのオブジェクトに束ねる
    // name属性とstateのキーを一致させる
    const [form, setForm] = useState<FormValues>({
        name: "",
        age: 20
    })
    const [submitted, setSubmitted] = useState(false)

    // handleFormで入力値をStateに反映
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            // 算出プロパティ名を使って、name属性に応じたキーに値をセット
            // フォーム要素とStateを同期させる
            // Stateで入力を管理するコンポーネントを制御コンポーネントと呼ぶ
            // すべての入力がStateで管理されるので、入力値を取得するための参照元が一つになる
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        setSubmitted(true)
    }

    const isSubmitDisabled = form.name.trim() === "" || form.age.toString().trim() === "";
    return (
        <>
            <h1>BasicForm</h1>
            <div>
                <label htmlFor="name">名前：</label>
                <input type="text" id="name" name="name" placeholder="山田　太郎" value={form.name} onChange={handleForm}/>
            </div>
            <div>
                <label htmlFor="age">年齢：</label>
                <input type="number" id="age" name="age" value={form.age} onChange={handleForm}/>
            </div>
            <button onClick={handleSubmit} disabled={isSubmitDisabled}>送信</button>

            {submitted && <p>こんにちは、{form.name} {form.age}さん </p>}

            <div><BackButton /></div>
        </>
    )

}
