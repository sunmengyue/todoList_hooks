import { useState } from 'react';

function useToggleState(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
}

export default useToggleState;
