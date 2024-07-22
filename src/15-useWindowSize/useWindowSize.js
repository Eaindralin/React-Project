import { useState } from "react";
import useEventListener from "../13-useEventListener/useEventListener";
export default function useWindowSize() {
  const [windowSize, setWindwoSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindwoSize({ window: window.innerWidth, height: window.innerHeight });
  });

  return windowSize;
}
