import { useState, useEffect } from "react";

const HackerEffect = ({ text, speed = 50, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

  useEffect(() => {
    let interval = null;
    let iteration = 0;

    const animate = () => {
      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3; // Adjust this to control how fast the real letters "lock in"
      }, speed);
    };

    animate();

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayText}</span>;
};

export default HackerEffect;