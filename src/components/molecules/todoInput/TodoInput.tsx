import React, { ReactElement, useCallback, useState } from "react";
import { ITodoInputProps } from "./interfaces/ITodoInput";
import { STodoInput } from "./styled/STodoInput";

const TodoInput: React.FC<ITodoInputProps> = ({ addTodo }): ReactElement => {
  const [value, setValue] = useState<string>('');
  const onKeyPress = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.currentTarget.value.trim()) {
      const todo = {
        label: value,
        isActive: true,
        id: Date.now(),
      };
      addTodo(todo);
      setValue('');
    }
  }, [addTodo, value]);

  const onChangeValue = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }, [])

  return (
    <STodoInput
      data-testid="todoInput"
      placeholder="Enter todo name here"
      onKeyPress={onKeyPress}
      value={value}
      onChange={onChangeValue}
    />
  );
};

export default React.memo(TodoInput);
