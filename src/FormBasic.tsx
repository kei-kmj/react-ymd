import {FC} from "react";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";

type FormValues = {
    name: string
    email: string
    gender: "male" | "female"
    memo: string
}
export const FormBasic: FC = () => {
    const defaultValues: FormValues = {
        name: "",
        email: "",
        gender: "male",
        memo: "",
    }
    // useFormで初期化
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
            defaultValues,
            mode: "onBlur"
        }
    )
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    const onError: SubmitErrorHandler<FormValues> = (errors) => {
        console.log(errors)
    }
    return (
        <>
            <h1>FormBasic</h1>
            <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                <div>
                    <label htmlFor="name">名前：</label>
                    <input type="text"
                           id="name" {...register("name", {required: "名前は必須です", maxLength: {value: 20, message: "20文字以内で入力してください"}})} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">メールアドレス：</label>
                    <input type="email" id="email" {...register("email", {
                        required: "メールアドレスは必須です", pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "メールアドレスの形式が正しくありません"
                        }
                    })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="gender">性別：</label>
                    <label>
                        <input type="radio" value="male"
                               {...register('gender', {required: "性別は必須です"})} />男性
                    </label>
                    <label>
                        <input type="radio" value="female"
                               {...register('gender', {required: "性別は必須です"})} />女性
                    </label>
                </div>
                <div>
                    <label htmlFor="memo">メモ：</label>
                    <textarea id="memo" {...register("memo")} />
                </div>
                <button type="submit" disabled={!isValid}>送信</button>
            </form>
        </>
    )
}