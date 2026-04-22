import { useState, useCallback } from "react";

/**
 * useToast — lightweight toast notification manager.
 *
 * @returns {{ toasts: Array, toast: Function }}
 *
 * @example
 * const { toasts, toast } = useToast();
 * toast("Added to bag 🛍");          // success (green)
 * toast("Already in bag", "err");   // error (red)
 */
export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback((msg, type = "ok") => {
    const id = Date.now() + Math.random();
    setToasts((q) => [...q, { id, msg, type }]);
    setTimeout(() => setToasts((q) => q.filter((t) => t.id !== id)), 2800);
  }, []);

  return { toasts, toast };
}
