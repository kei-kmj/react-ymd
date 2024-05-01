import {ReactNode} from "react";
import {BackButton} from "./components/BackButton.tsx";

type Props = {
    children: ReactNode;
}

export const Wellcome = ({children}: Props) => {
    return (
        <>
            {/*propsに含まれるのは属性の値と子要素の値*/}
            {/*props.chiledrenプロパティで呼び出し元のコンテンツを取得できる*/}
            <h1>Wellcome</h1>
            {children}

            <BackButton/>
        </>
    )
}