import { ReactElement } from "react";
import AppWrapper from "./AppWrapper";
import TodoPage from "./components/pages/todoPage/TodoPage";

function App(): ReactElement {
  return (
    <AppWrapper>
      <TodoPage />
    </AppWrapper>
  );
}

export default App;
