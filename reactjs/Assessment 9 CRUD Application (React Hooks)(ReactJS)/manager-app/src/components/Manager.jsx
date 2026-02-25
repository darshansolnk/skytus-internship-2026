import { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

const Manager = ({ type }) => {

  const [items, setItems] = useState([]);

  // useEffect (Mount)
  useEffect(() => {
    const savedData = localStorage.getItem(type);
    if (savedData) {
      setItems(JSON.parse(savedData));
    }
  }, [type]);

  // useEffect (Update)
  useEffect(() => {
    localStorage.setItem(type, JSON.stringify(items));
  }, [items, type]);

  const addItem = (item) => {
    setItems([...items, { id: Date.now(), name: item }]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <h3 className="section-title">{type}</h3>
      <ItemForm onAdd={addItem} />
      <ItemList items={items} onDelete={deleteItem} />
    </>
  );
};

export default Manager;