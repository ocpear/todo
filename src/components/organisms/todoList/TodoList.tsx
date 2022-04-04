import { ReactElement } from "react";
import TodoGroupButton from "../../molecules/todoGroupButton/TodoGroupButton";
import Todo from "../../molecules/todo/Todo";
import TodoInput from "../../molecules/todoInput/TodoInput";
import { STodoListContainer } from "./styled/STodoList";
import useTodoList from "./hooks/useTodoList";

const TodoList = (): ReactElement => {
  const {
    list,
    viewMode,
    displayingList,
    onDelete,
    onChangeActive,
    onToggleAll,
    onChangeViewMode,
    addTodo,
  } = useTodoList();

  return (
    <>
      <TodoInput addTodo={addTodo} />

      {list.length > 0 && (
        <>
          <STodoListContainer>
            {displayingList.map(l => (
              <Todo {...l} key={l.id} onDelete={onDelete} onChangeActive={onChangeActive} />
            ))}
          </STodoListContainer>
          <TodoGroupButton
            onToggleAll={onToggleAll}
            onChangeViewMode={onChangeViewMode}
            viewMode={viewMode}
          />
        </>
      )}
    </>
  );
};

export default TodoList;
