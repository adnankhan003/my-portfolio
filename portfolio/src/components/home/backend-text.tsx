import { useEffect, useState } from "react";
import "./home1.css"

const TEXT = "Software Developer";
const STEP_DELAY = 160;   // speed per step (slow + deliberate)
const PAUSE_DELAY = 1800; // pause at full reveal / full hide

export default function AnimatedCursorText() {
  const [pos, setPos] = useState(0);
  const [forward, setForward] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setTimeout(() => {
      setPos((p) => {
        // reached end → pause → reverse
        if (forward && p >= TEXT.length) {
          setPaused(true);
          setTimeout(() => {
            setForward(false);
            setPaused(false);
          }, PAUSE_DELAY);
          return p;
        }

        // reached start → pause → forward
        if (!forward && p <= 0) {
          setPaused(true);
          setTimeout(() => {
            setForward(true);
            setPaused(false);
          }, PAUSE_DELAY);
          return p;
        }

        return forward ? p + 1 : p - 1;
      });
    }, STEP_DELAY);

    return () => clearTimeout(timer);
  }, [pos, forward, paused]);

  return (
    <div className="scanner-text">
      <span className="text-base">{TEXT}</span>

      <span
        className="text-active"
        style={{
          clipPath: `inset(0 ${100 - (pos / TEXT.length) * 100}% 0 0)`
        }}
      >
        {TEXT}
      </span>

      <span
        className="cursor"
        style={{ left: `${(pos / TEXT.length) * 100}%` }}
      />
    </div>
  );
}
