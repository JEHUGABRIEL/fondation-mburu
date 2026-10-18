"use client";

import { useRef } from "react";
import { Icon } from "@/components/Icon";
import { TestimonialForm } from "@/components/TestimonialForm";

/**
 * "Donner votre avis" button that opens the testimonial form in a modal.
 * Built on <dialog>: focus is trapped, Escape and the backdrop close it.
 */
export function ReviewDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className="btn btn-brand"
        onClick={() => dialogRef.current?.showModal()}
      >
        Donner votre avis
        <Icon name="edit" size={16} />
      </button>
      <dialog
        ref={dialogRef}
        className="mb-modal"
        aria-label="Donner votre avis"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="mb-modal-in">
          <button
            type="button"
            className="mb-modal-close"
            onClick={() => dialogRef.current?.close()}
            aria-label="Fermer"
          >
            <Icon name="close" size={20} />
          </button>
          <TestimonialForm />
        </div>
      </dialog>
    </>
  );
}
