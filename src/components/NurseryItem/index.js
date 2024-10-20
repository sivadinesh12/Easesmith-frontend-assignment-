import "./index.css";

const NurseryItem = (props) => {
  const { eachItem } = props;
  const { id, img, description } = eachItem;
  return (
    <li className="nursery-item">
      <img src={img} alt="flower" />
      <p>{description}</p>
    </li>
  );
};

export default NurseryItem;
