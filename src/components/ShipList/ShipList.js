import React from 'react';

const ShipList = ({ships}) => [
    <h1>List of transports</h1>,

    ships.map((ship, i) => (
    <ul key={i} className="list">
      <li>Name: {ship.name}</li>
      <li>Manufacturer: {ship.manufacturer}</li>
      <li>Cost: {ship.cost_in_credits}</li>
    </ul>
  ))]

export default ShipList;