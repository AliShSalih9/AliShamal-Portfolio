import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./toast.css";

type ToastProps = {
  message: string;
  visible: boolean;
  type: "success" | "error";
  /** ms before the toast auto-dismisses. Defaults to 3000. */
  duration?: number;
  onDismiss?: () => void;
};

function Toast({ message, visible, type, duration = 3000, onDismiss }: ToastProps) {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    setIsVisible(visible);
    if (!visible) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, duration);

    return () => window.clearTimeout(timeout);
    // message intentionally excluded: a changed message while visible should
    // not restart the timer unless the caller explicitly re-triggers `visible`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, duration]);

  if (!isVisible) {
    return null;
  }

  return createPortal(
    <div
      className={`toast toast-${type}`}
      role={type === "error" ? "alert" : "status"}
      aria-live={type === "error" ? "assertive" : "polite"}
    >
      <span className="toast-icon" aria-hidden="true">
        {type === "success" ? "✓" : "!"}
      </span>
      <p>{message}</p>
    </div>,
    document.body
  );
}

export default Toast;