import "./index.css";

const PlantAndPotsItem = (props) => {
  const { plantsandPots, setPlantsandPots, eachItem } = props;
  const { id } = eachItem;
  const handlePlantsAndPots = () => {
    setPlantsandPots(id);
  };
  return (
    <li
      className={`mx-2 ${
        plantsandPots === id ? "plants-selected" : "plants-unSelected"
      } cursor-pointer flex justify-center items-center`}
      onClick={handlePlantsAndPots}
    >
      <p>{id}</p>
    </li>
  );
};

export default PlantAndPotsItem;
