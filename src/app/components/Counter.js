"use client";
import React, { useEffect, useState } from "react";

const Counter = ({ targetedValue, First }) => {
  const [counterValue, setCounterValue] = useState(0);
  const targetValue = targetedValue; // Change this value to the desired final value
  const incrementStep = First ? 10 : 2; // Change this value to adjust the increment speed

  useEffect(() => {
    let animationFrameId;
    let currentCounterValue = 0;

    const animateCounter = () => {
      setCounterValue((prevValue) => {
        currentCounterValue += incrementStep;
        return currentCounterValue < targetValue
          ? currentCounterValue
          : targetValue;
      });

      if (currentCounterValue < targetValue) {
        animationFrameId = requestAnimationFrame(animateCounter);
      }
    };

    const scrollHandler = () => {
      const counterElement = document.querySelector(".counter");
      if (isInViewport(counterElement) && !animationFrameId) {
        animationFrameId = requestAnimationFrame(animateCounter);
      }
    };

    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", scrollHandler);

    // Clean up the event listener and animation frame when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetValue, incrementStep]);

  return (
    <>
      <p className={First ? "counter firstCounter" : "counter"}>
        {counterValue}+
      </p>
    </>
  );
};

export default Counter;
