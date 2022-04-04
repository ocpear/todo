import { ITodo } from "../../todo/interfaces/ITodo";

export interface ITodoInputProps {
    addTodo: (a: ITodo) => void;
}