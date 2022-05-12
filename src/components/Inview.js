import React, { useRef, useEffect } from "react";

const Inview = ({ children }) => {
  const myRef = useRef();
  const callbackFunction = (entryPoint) => {
    if (entryPoint[0].isIntersecting) {
      entryPoint[0].target.classList.remove("scroll-disabled");
    } else {
      entryPoint[0].target.classList.add("scroll-disabled");
    }
  };

  const options = {
    root: myRef.current,
    rootMargin: "1px",
    threshold: 1.0,
  };
  useEffect(() => {
    let observer = new IntersectionObserver(callbackFunction, options);
    observer.observe(myRef.current);
  });
  return (
    <div className="scroll-disabled" ref={myRef}>
      {children}
    </div>
  );
};

export default Inview;
