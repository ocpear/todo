import { useState, useCallback } from "react";
import { VIEW_MODE } from "../../../../constants";
import { ITodo } from "../../../molecules/todo/interfaces/ITodo";
import { IUseTodoList } from "../interfaces/ITodoList";

const useTodoList = (): IUseTodoList => {
  const [list, setList] = useState<ITodo[]>([]);
  const [viewMode, setViewMode] = useState<string>(VIEW_MODE.ALL);

  const displayingList = list.filter((l) =>
    viewMode === VIEW_MODE.ACTIVE
      ? l.isActive
      : viewMode === VIEW_MODE.DONE
        ? !l.isActive : l
  );

  const addTodo = useCallback((todo: ITodo) => {
    setList((prev) => [todo, ...prev]);
  }, []);

  const onDelete = useCallback(
    (id: number) => () => {
      setList((prev) => prev.filter((p) => p.id !== id));
    }, []);

  const onToggleAll = () => {
    const updatingIdSet = new Set(displayingList.map(e => e.id));
    setList((prev) => prev.map((e) => ({ ...e, isActive: updatingIdSet.has(e.id) ? !e.isActive : e.isActive })));
  };

  const onChangeViewMode = useCallback((view: string) => () => setViewMode(view), []);

  const onChangeActive = useCallback(
    (id) => () => {
      setList((prev) => prev.map((p) => (p.id === id ? { ...p, isActive: !p.isActive } : p)));
    }, []);

  return {
    list,
    viewMode,
    displayingList,
    onDelete,
    onChangeActive,
    onToggleAll,
    onChangeViewMode,
    addTodo,
  }
};

export default useTodoList;
