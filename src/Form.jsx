import { useState } from "react";

const Form = ({ addColor, defaultGradient }) => {
  const [gradient, setGradient] = useState(defaultGradient);
  const [color, setColor] = useState("#9f2b91");
  const handleSubmit = (e) => {
    e.preventDefault();
    let newGradient = parseInt(gradient);
    addColor(color, newGradient);
  };
  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          placeholder='#9f2b91'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='number'
          name='newGradient'
          id='newGradient'
          min='1'
          step='1'
          max='50'
          value={gradient}
          onChange={(e) => setGradient(e.target.value)}
        />
        <button type='submit' className='btn' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
