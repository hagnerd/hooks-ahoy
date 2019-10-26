import { useEffect } from 'react';

// TODO Change the dependancy array to respect changes to keybinds (Memoization)
// TODO Allow user to override attachment location (Pass in a ref, object, or node)

// * Declares types for key listener events possibly sent by the user, currently accepts
// * A single keybind or an object of keybinds
type KeyListener = (event: KeyboardEvent) => void;
interface ListenerObject {
  [key: string]: KeyListener;
}
type KeyArgs = KeyListener | ListenerObject;

export function useKeybind(keybinds: KeyArgs) {
  // * Sets up and tears down the event listener for keydown
  useEffect(() => {
    // * Receives the keyboard event, determines whether keybinds is an object or a function
    const keylistener = (event: KeyboardEvent) => {
      // * Determines whether it is a single keybind or object of keybinds
      if (typeof keybinds === 'function') {
        keybinds(event);
      } else {
        // * To allow the user to pass in either lowercase or uppercase keybinds the event.key is converted
        // * to lowercase.
        const key = event.key.toLowerCase();
        const listener = keybinds[event.key] || keybinds[key];

        if (listener) {
          listener(event);
        }
      }
    };

    // * Adds event listener
    document.addEventListener('keydown', keylistener);

    // * Destroys the event listener for the garbage collector
    return () => {
      document.removeEventListener('keydown', keylistener);
    };
  }, []);
}
