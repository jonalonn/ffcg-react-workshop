import React from "react";
import './Ships.css';

import {
  calculateTotalPassengers,
  findBiggestShip,
  findSmallestShip
} from "../../helpers";

const Ships = ({ ships }) => (
  <div>
    <p>Total passenger count: {calculateTotalPassengers(ships)}</p>
    <p>Biggest ship: {findBiggestShip(ships)}</p>
    <p>Smallest ship: {findSmallestShip(ships)}</p>
    {ships.map((ship, i) => (
      <ul key={i} className="list">
        <li>Name: {ship.name}</li>
        <li>Manufacturer: {ship.manufacturer}</li>
        <li>Cost: {ship.cost_in_credits}</li>
      </ul>
    ))}
  </div>
);

export default Ships;
