import React, {FC, useState} from "react";
import {BackButton} from "./components/BackButton.tsx";
import './TodoList.css';

type Todo = {
    id: number;
    title: string;
    created: Date;
    isDone: boolean;
}


export const TodoList: FC = () => {
    const [title, setTitle] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const [maxId, setMaxId] = useState<number>(0);
    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleAdd = () => {
        setTodos([...todos, {id: maxId, title, created: new Date(), isDone: false}]);
        setMaxId(maxId + 1)
        setTitle("");
    }

    const toggleDone = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const sortTodo = [...todos].sort((a, b) => {
        if (a.isDone === b.isDone) {
            return a.created.getTime() - b.created.getTime();
        }
        return a.isDone ? 1 : -1;
    });


    return (
        <>
            <h1>TodoList</h1>
            <div>
                <label>Todo
                    <input type="text" value={title} onChange={handleChangeTitle}/>
                </label>
                <button type="button" onClick={handleAdd}>追加</button>
                <hr/>
                <ul>
                    {sortTodo.map(todo => (
                        <li key={todo.id} className={todo.isDone ? 'done' : ''}>
                            <input
                                type="checkbox"
                                checked={todo.isDone}
                                onChange={() => toggleDone(todo.id)}
                                className="todo-checkbox"
                            />
                            {todo.title}
                            <button
                                type="button"
                                onClick={() => deleteTodo(todo.id)}
                                className="delete-button"
                            >
                                削除
                            </button>

                        </li>
                    ))}
                </ul>
            </div>
            <div><BackButton/></div>
        </>)

}