import { useState, useRef, RefObject } from 'react';
import { useKeybind } from './useKeybind';
import { useScrollLock } from './use-scroll-lock';

type Modal<ModalBody extends HTMLElement, CloseButton extends HTMLElement> = {
  isVisible: boolean;
  showModal: () => void;
  closeModal: () => void;
  onClickAway: (event: React.MouseEvent<HTMLElement>) => void;
  overlayRef: RefObject<HTMLElement>;
  closeRef: RefObject<CloseButton>;
  modalRef: RefObject<ModalBody>;
};

export function useModal<
  ModalBody extends HTMLElement,
  CloseButton extends HTMLElement
>(): Modal<ModalBody, CloseButton> {
  const [isVisible, setIsVisisble] = useState(false);
  // Stores the last focused element, so that when the modal is closed, proper focus can be returned
  const [lastFocus, setLastFocus] = useState(
    document.activeElement as HTMLElement
  );

  // References the button, or element that will trigger the modal to close
  const closeRef = useRef() as RefObject<CloseButton>;
  // References the modal element so that we can know when the user has clicked away, triggering the modal to close
  const modalRef = useRef() as RefObject<ModalBody>;

  const closeModal = () => {
    setIsVisisble(false);

    // When the modal closes, the focus should return
    lastFocus.focus();
  };

  const showModal = () => {
    setLastFocus(document.activeElement as HTMLElement);
    setIsVisisble(true);

    // When the modal opens the focus should go to the element responsible for closing it
    closeRef.current!.focus();
  };

  // Listens for the user to press escape and closes the modal
  // TODO: Come back when we figure out how to attach via ref
  useKeybind(event => {
    if (event.key.toLowerCase() === 'escape') {
      closeModal();
    }
  });

  // Attach a scroll lock on the overlay, and send the reference through to the user
  const overlayRef = useScrollLock(isVisible)!;

  const onClickAway = (event: React.MouseEvent<HTMLElement>) => {
    // Return early if modalRef.current is null
    if (!modalRef.current) {
      return;
    }

    // Check if the event's target is the modal itself
    if (modalRef.current.contains(event.currentTarget)) {
      // if so, return
      return;
    } else {
      // otherwise trigger the modal to close
      closeModal();
    }
  };

  return {
    isVisible,
    showModal,
    closeModal,
    overlayRef,
    closeRef,
    modalRef,
    onClickAway,
  };
}
