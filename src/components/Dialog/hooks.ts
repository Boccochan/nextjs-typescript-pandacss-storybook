import { useCallback, useState } from "react";

export const useDialog = (defaultOpen: boolean = false) => {
  const [isOpen, setOpen] = useState(defaultOpen);

  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);

  return { isOpen, onOpen, onClose };
};
