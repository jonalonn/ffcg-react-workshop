import React from 'react';

const ShipList = ({ships}) => [
    <h1 key="title">List of transports</h1>,

    ships.map(({name, manufacturer, cost_in_credits: cost}, i) => (
    <ul key={i} className="list">
      <li>Name: {name}</li>
      <li>Manufacturer: {manufacturer}</li>
      <li>Cost: {cost}</li>
    </ul>
  ))]

export default ShipList;