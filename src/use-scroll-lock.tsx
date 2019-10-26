import { useRef, RefObject, useEffect } from 'react';

/* 

TODO: Figure out a way to conditionally have internal state to track whether or not to lock
if the user does not provide a boolean

We need to figure out how to affect conditional return types with typescript because... typescript

*/

export function useScrollLock<T extends HTMLElement>(
  isLocked: boolean,
  maxHeight = '100vh'
): RefObject<T> {
  const ref = useRef() as RefObject<T>;

  useEffect(() => {
    if (ref.current) {
      ref.current.style.overflowY = isLocked ? 'hidden' : 'visible';
      ref.current.style.maxHeight = isLocked ? maxHeight : 'initial';
    }
  }, [isLocked, ref]);

  return ref;
}
