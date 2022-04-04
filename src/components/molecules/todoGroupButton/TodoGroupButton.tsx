import React, { ReactElement, ReactNode } from "react";
import { VIEW_MODE } from "../../../constants";
import { ITodoGroupButtonProps } from "./interfaces/ITodoGroupButton";
import {
  STodoGroupButton,
  STodoGroupButtonWrapper,
  SToggleAllActionButton,
  STodoGroupViewButtonWrapper
} from "./styled/STodoGroupButton";

const TodoGroupButton: React.FC<ITodoGroupButtonProps> =
  ({ onToggleAll, onChangeViewMode, viewMode }): ReactElement => {

    const todoViewGroupJsx: ReactNode = React.useMemo(() => {
      return Object.values(VIEW_MODE).map(v => <STodoGroupButton
        data-testid={"todoButton" + v}
        key={v}
        text={v}
        onClick={onChangeViewMode(v)}
        color={viewMode === v ? 'info' : undefined}
      />)
    }, [onChangeViewMode, viewMode])

    return (
      <STodoGroupButtonWrapper>
        <STodoGroupViewButtonWrapper>
          <SToggleAllActionButton
            data-testid={"todoButtonToggleAll"}
            text="Toggle All"
            color={"success"}
            onClick={onToggleAll}
          />
        </STodoGroupViewButtonWrapper>
        <STodoGroupViewButtonWrapper>
          {todoViewGroupJsx}
        </STodoGroupViewButtonWrapper>
      </STodoGroupButtonWrapper>
    );
  };

export default TodoGroupButton;
