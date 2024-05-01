import {ReactNode} from "react";
import {BackButton} from "./components/BackButton.tsx";

type Props = {
    children: ReactNode[]
}

export const WellcomeKey = ({children}: Props) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const title = children.find((child) => child.key === "title");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const content = children.find((child) => child.key === "content");

    return (
        <>
            <h1>Wellcome</h1>
            {title}
            {content}

            <BackButton/>
        </>
    )
}