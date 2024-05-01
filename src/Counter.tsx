import {useState} from "react";
import {BackButton} from "./components/BackButton.tsx";


type Props = {
    init: number;
}

export const Counter = ({init}: Props) => {
    // countは状態変数、setCountは状態変数を更新する関数
    // useStateは初期値を引数に取り、状態変数と更新関数を返す
    // countは初期値initで初期化される
    const [count, setCount] = useState(init)

    // 再描画はstateが更新されたとき、Propsが変更されたとき、親コンポーネントが再描画されたときに発生する
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h1>Counter</h1>
            <button onClick={handleClick}>Click me!</button>
            <h2>{count}</h2>

            <BackButton/>
        </>)

}