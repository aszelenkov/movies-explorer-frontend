import { useEffect } from 'react';

export function usePopupClose(isOpen, closePopup) {
  useEffect(() => {
    if (!isOpen) return;
    const handleOverlay = (evt) => {
      if (evt.target.classList.contains("info-tooltip_opened")) {
        closePopup();
      }
    };
    const handleEscape = (evt) => {
      if (evt.key === "Escape") {
        closePopup();
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleOverlay);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOverlay);
    };
  }, [isOpen, closePopup]);
};