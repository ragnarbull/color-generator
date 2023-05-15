import { v4 as uuid } from "uuid";
import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((color) => {
        return <SingleColor key={uuid()} color={color} />;
      })}
    </section>
  );
};
export default ColorList;
