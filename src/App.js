import React from 'react';
import './style.css';

import { useState, useEffect } from 'react';

export default function App() {
  const { resourceType, setResourceType } = useState('todos');
  const { items, setItems } = useState([]);
  const { total, setTotal } = useState(0);
  return (
    <>
      <button onClick={null}>ToDos</button>
      <button onClick={null}>Comments</button>
      <button onClick={null}>Posts</button>
    </>
  );
}
