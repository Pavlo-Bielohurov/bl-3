import { useEffect, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onCloseEscModal = (e) => {
      if (e.code === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onCloseEscModal);

    return () => {
      window.removeEventListener("keydown", onCloseEscModal);
    };
  }, []);

  return {
    isOpen,
    setIsOpen,
  };
};
