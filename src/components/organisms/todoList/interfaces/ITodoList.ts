import { ITodo } from "../../../molecules/todo/interfaces/ITodo";

export interface IUseTodoList {
    displayingList: ITodo[];
    list: ITodo[];
    viewMode: string;
    onDelete: (id: number) => () => void;
    onChangeActive: (id: number) => () => void;
    onToggleAll: () => void;
    onChangeViewMode: (s: string) => () => void
    addTodo: (a: ITodo) => void;
}