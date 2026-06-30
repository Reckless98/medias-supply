import { useState, useCallback } from "react";
import type { FormEvent } from "react";

export function useFormSubmit(onSubmit: () => void, resetDelay = 5000) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e: FormEvent): void => {
    e.preventDefault();
    onSubmit();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), resetDelay);
  }, [onSubmit, resetDelay]);

  return { submitted, handleSubmit };
}
