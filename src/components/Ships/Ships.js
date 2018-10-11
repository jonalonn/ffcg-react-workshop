import React from "react";
import './Ships.css';
import ShipList from '../ShipList';

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
    <ShipList ships={ships} />
  </div>
);

export default Ships;
