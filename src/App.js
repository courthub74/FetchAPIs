import React from 'react';
import './style.css';

import { useState, useEffect } from 'react';

const App = () => {
  const [resourceType, setResourceType] = useState('Todos');
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setTotal(json.length);
      });
  });

  return (
    <>
      <button
        onClick={() => {
          setResourceType('Todos');
        }}
      >
        ToDos
      </button>
      <button
        onClick={() => {
          setResourceType('Comments');
        }}
      >
        Comments
      </button>
      <button
        onClick={() => {
          setResourceType('Posts');
        }}
      >
        Posts
      </button>

      <h1>{total}</h1>
      <h2>{resourceType}</h2>
      <div>
        {items.map((item) => {
          return <p>{JSON.stringify(item)}</p>;
        })}
      </div>
    </>
  );
};

export default App;
