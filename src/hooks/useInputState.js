import { useState } from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  function handleChange(evt) {
    setValue(evt.target.value);
  }
  function reset() {
    setValue('');
  }

  return [value, handleChange, reset];
};
