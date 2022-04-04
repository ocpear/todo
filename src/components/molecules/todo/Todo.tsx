import React, { ReactElement } from "react";
import Button from "../../atoms/button/Button";
import { ITodoProps } from "./interfaces/ITodo";
import { STodoDotTypography, STodoTypography, STodoWrapper } from "./styled/STodo";

const Todo: React.FC<ITodoProps> = ({ label, isActive, onDelete, onChangeActive, id }): ReactElement => {
  return <STodoWrapper onClick={onChangeActive(id)} data-testid="todo">
    <STodoDotTypography text="." fontSize={16} />
    <STodoTypography
      isActive={isActive}
      color={isActive ? undefined : 'error'}
      text={label}
      fontSize={14}
    />
    <Button color={"error"} text='X' onClick={onDelete(id)} data-testid="todoDelete" />
  </STodoWrapper>;
};

export default React.memo(Todo);