import { useState, useEffect } from "react";
const useCouner = (initialCount) => {
    const [count, setCount] = useState(initialCount);
  
    useEffect(() => {
      console.log("===>", count);
    }, [count]);
  
    const increament = () => {
      setCount(count + 1);
    };
  
    return {
      count,
      increament,
    }
  };

  export default useCouner;