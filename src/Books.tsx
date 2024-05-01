import {Key} from "react";
import {BackButton} from "./components/BackButton.tsx";
import {Book, books} from "./BooksData.tsx";
import {cloneDeep} from "lodash";

export const Books = () => {
    const booksCopy = cloneDeep(books)
    return (
        <div>
            <h2>Books</h2>
            {/*一覧表示*/}
            <ul>
                {books.map(({title, author, isbn, price}: Book, index: Key) => (
                    <li key={index}>{title}, {author}, {isbn}, {price}</li>
                ))}
            </ul>
            {/*フィルター*/}
            <h3>Filter $20以上</h3>
            <ul>
                {books.filter(({price}: Book) => price < 20).map(({title, author, isbn, price}: Book, index: Key) => (
                    <li key={index}>{title}, {author}, {isbn}, {price}</li>
                ))}
            </ul>
            {/*ソート*/}
            <h3>Sort by author</h3>
            <ul>
                {booksCopy.sort(({author: a}: Book, {author: b}: Book) => a.localeCompare(b)).map(({title, author, isbn, price}: Book, index: Key) => (
                    <li key={index}>{title}, {author}, {isbn}, {price}</li>
                ))}
            </ul>
            <BackButton/>
        </div>
    )
}