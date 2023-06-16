import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="main">
      <h1>Resize Window Dimensions</h1>
      <h2>Height = {dimensions.height}</h2>
      <h2>Width = {dimensions.width}</h2>
    </div>
  );
};

export default App;
