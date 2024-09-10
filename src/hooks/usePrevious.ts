/* eslint-disable local-rules/no-use-effect */
import { useRef, useEffect } from 'react';

const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious