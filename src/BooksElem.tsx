import React, {ReactNode} from "react"
import {Book, Books} from "./BooksData.tsx";


type BooksElemProps = {
    src: Books;
    children: (elem: Book) => ReactNode;
};
export const BooksElem = ({ src, children }: BooksElemProps) => {
    return (
        <dl>
            {src.map(elem => (
                <React.Fragment key={elem.title}>
                {children(elem)}
                </React.Fragment>
            ))}
        </dl>
    )
}