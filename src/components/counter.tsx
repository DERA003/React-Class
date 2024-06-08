import { useState } from "react";
        
const Counter = () => {
   const[count,setCount] = useState(10)
   return(
    <>
    <p>You just clicked on {count}</p>
    <button onClick={() => setCount(count + 10)}>Click</button>
    </>
   )
};
export default Counter;