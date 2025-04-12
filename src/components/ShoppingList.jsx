// Shopping list logic (add, remove, sync items)

// Shopping list logic (add, remove, sync items) in real time
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ShoppingList.css';

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedItems = localStorage.getItem('shoppingListItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
    setIsLoading(false)
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingListItems', JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { id: uuidv4(), name: newItem, checked: false }]);
      setNewItem('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleItemCheck = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  return (
    <div className="shopping-list-container">
      <h1>Lista de compras</h1>
      <div className="add-item-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        />
        <button onClick={addItem}>Agregar producto</button>
      </div>
      {isLoading ? <div>Cargando...</div> : items.length === 0 ? (
        <div className="empty-list-message">Tu lista de compras esta vacia!</div>
      ) : (
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} className={item.checked ? 'checked' : ''}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleItemCheck(item.id)}
            />
            <span>{item.name}</span>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default ShoppingList;
