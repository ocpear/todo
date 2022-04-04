import { ReactElement, memo } from "react";
import TodoTitle from "../../molecules/todoTitle/TodoTitle";
import TodoList from "../../organisms/todoList/TodoList";
import { STodoPage, STodoPageWrapper } from "./styled/STodoPage";

const TodoPage = (): ReactElement => {
  return (
    <STodoPageWrapper>
      <STodoPage>
        <TodoTitle />
        <TodoList />
      </STodoPage>
    </STodoPageWrapper>
  );
};

export default memo(TodoPage);
