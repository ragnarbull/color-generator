import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const defaultGradient = 5;
  const [colors, setColors] = useState(
    new Values("#9f2b91").all(defaultGradient)
  );
  const addColor = (color, userGradient) => {
    try {
      const newColors = new Values(color).all(newGradient);
      setColors(newColors);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <main>
      <Form addColor={addColor} defaultGradient={defaultGradient} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
