import React from 'react';
import './style.css';

function Car() {
  return <li>G-Wagon</li>;
}

export default function App() {

  const cars = ['G-Wagon', 'Masarati', 'Maybach', 'Posch', 'Audi'];

  const listItems = cars.map(item => { // 'item' here is the value of cars items. So, it returns 'item', which are the array of cars
    return <li key={item}>{item}</li> //  React uses the key prop to efficiently update and re-render lists of elements. When a list changes (items are added, removed, or reordered), React can compare the new list with the previous one using the key prop to identify which items have changed. This allows React to update only the parts of the list that actually changed, improving performance.
  })
  return (
    // <div>
    //   <Car/>
    // </div>

    <ol>
      {listItems}
    </ol>
  );
}
