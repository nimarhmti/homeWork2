import { useEffect, useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevState) => --prevState);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return [counter, setCounter];
};

// export const useTimer = () => {
//   const [timer, setTimer] = useState(30);
//   useEffect(() => {
//     const interval = setTimeout(() => {
//       setTimer((prevState) => --prevState);
//     }, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   return [timer, setTimer];
// };
