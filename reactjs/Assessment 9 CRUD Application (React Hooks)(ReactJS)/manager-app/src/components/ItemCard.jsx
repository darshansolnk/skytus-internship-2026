import ReusableButton from "./ReusableButton";

const ItemCard = ({ item, onDelete }) => {
  return (
    <div className="item-card">
      <span>{item.name}</span>
      <ReusableButton
        text="Delete"
        className="delete-btn"
        onClick={() => onDelete(item.id)}
      />
    </div>
  );
};

export default ItemCard;