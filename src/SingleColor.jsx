import { toast } from "react-toastify";

const SingleColor = ({ color }) => {
  const { hex, weight, type } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`Copied #${hex} to clipboard`);
      } catch (err) {
        toast.error(`Failed to copy #${hex} to clipboard`);
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };
  return (
    <article
      className={type === "shade" ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};
export default SingleColor;
