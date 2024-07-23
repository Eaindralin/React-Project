import { useState, useCallback } from "react";
export default function useStateWithValidation(validationFunc, intialValue) {
  const [state, setState] = useState(intialValue);
  const [isValid, setIsVaid] = useState(() => validationFunc(state));

  const onChange = useCallback(
    (nextState) => {
        const value =
            typeof nextState === "function" ? nextState(state) : nextState
            setState(value);
            setIsVaid(validationFunc(value));
    },
    [validationFunc]
  );
  return [state, onChange, isValid];
}
