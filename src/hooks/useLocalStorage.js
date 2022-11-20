import React, { useEffect, useState } from 'react';

/**
 * @param {string} key
 * @param {any} initialValue
 */
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const valueStr = window.localStorage.getItem(key);
    if (valueStr) {
      setValue(Number(valueStr));
    }
  }, [key]);

  useEffect(() => {
    const prev = window.localStorage.getItem(key);
    const next = String(value);
    if (prev !== next) {
      window.localStorage.setItem(key, next);
    }
  }, [key, value]);
  return [value, setValue];
}

export default useLocalStorage;
