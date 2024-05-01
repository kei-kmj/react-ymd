import {ReactNode} from "react";
import {BackButton} from "./components/BackButton.tsx";

type Props = {
    wellcome: ReactNode;
}

export const WellcomeProps = ({wellcome}: Props) => {
    return (
        <>
            {/*propsに含まれるのは属性の値と子要素の値*/}
            {/*props.chiledrenプロパティで呼び出し元のコンテンツを取得できる*/}
            <h1>Wellcome</h1>
            {wellcome}

            <BackButton/>
        </>
    )
}