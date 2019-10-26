import * as React from 'react';
import { createPortal } from 'react-dom';

import { useModal } from '../src/';

type ModalBodyP = {
  closeModal: () => void;
  onClickAway: (event: React.MouseEvent<HTMLElement>) => void;
  closeRef: React.RefObject<HTMLButtonElement>;
  modalRef: React.RefObject<HTMLDivElement>;
  overlayRef: React.RefObject<HTMLElement>;
};

function ModalBody({
  closeModal,
  onClickAway,
  closeRef,
  modalRef,
  overlayRef,
}: ModalBodyP) {
  return createPortal(
    <aside
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      aria-modal="true"
      aria-label="whatever"
      role="dialog"
      ref={overlayRef}
      onClick={onClickAway}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          width: '80%',
          height: '400px',
          padding: '2rem',
        }}
        ref={modalRef}
      >
        <button
          aria-labelledby="close-modal"
          onClick={closeModal}
          ref={closeRef}
        >
          <div id="close-modal">Close Modal</div>
          <span aria-hidden="true">X</span>
        </button>
        <h1>Some modal content</h1>
        <p>Yo what's up</p>
      </div>
    </aside>,
    document.getElementById('modal')!
  );
}

export default function Modal() {
  const { isVisible, showModal, ...modalProps } = useModal<
    HTMLDivElement,
    HTMLButtonElement
  >();

  return (
    <React.Fragment>
      <div>
        <button onClick={showModal}>Show Modal</button>
      </div>
      {isVisible ? <ModalBody {...modalProps} /> : null}
    </React.Fragment>
  );
}
