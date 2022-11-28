import { useState, useEffect, useRef } from "react";

function useInterval(callback:any, delay:number) {
  const savedCallback = useRef<Function>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if(savedCallback && typeof(savedCallback.current)==='function')savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function useElementHeight(element:any) {
  const [lastHeight, setLastHeight] = useState(-1);

  useEffect(() => {
    const sizes = element.getBoundingClientRect();
    if (Math.abs(lastHeight - sizes.height) > 20 || lastHeight < sizes.height) {
      setLastHeight(sizes.height);
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useInterval(() => {
    const sizes = element.getBoundingClientRect();
    if (Math.abs(lastHeight - sizes.height) > 20 || lastHeight < sizes.height) {
      setLastHeight(sizes.height);
    }
  }, 500);

  return lastHeight;
}

export default useElementHeight;
