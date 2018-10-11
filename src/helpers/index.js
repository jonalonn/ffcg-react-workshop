import { pipe } from "ramda";

// Logger function

const logger = data => console.log(data) || data;

// Pluck data

const pluckPassengers = data => data.map(({ passengers = "0" }) => passengers);

const pluckLength = data => data.map(({ length }) => length);

const pluckFields = data => data.map(({ fields }) => fields);

// Convert data

const toInt = data => data.map(val => parseInt(val, 10));

const toFloat = data => data.map(val => parseFloat(val));

// Sort, filter

const filterNum = data => data.filter(val => !isNaN(val));

const accArray = data => data.reduce((acc, val) => acc + val);

const biggest = data => data.reduce((a, b) => (a > b ? a : b));

const smallest = data => data.reduce((a, b) => (a > b ? b : a));

const sortData = data =>
  data.sort(({ cost_in_credits: a }, { cost_in_credits: b }) => b - a);

const filterNaN = data =>
  data.filter(({ cost_in_credits }) => !isNaN(cost_in_credits));

// Find by

const findShipSize = comparator =>
  pipe(
    pluckLength,
    toFloat,
    filterNum,
    comparator,
  );

export const findBiggestShip = findShipSize(biggest);
export const findSmallestShip = findShipSize(smallest);

// Fetch data

const fetchTransport = async (_fetch = fetch) =>
  await (await _fetch("json/transport.json")).json();

//Extract relevant data

const fetchFields = async () => pluckFields(await fetchTransport());
// const fetchFields = async () => pluckFields(await fetchTransport());

// Calculate stuff with compositioning of functions

export const calculateTotalPassengers = pipe(
  pluckPassengers,
  toInt,
  filterNum,
  accArray
);

export const sortedByCost = pipe(
  logger,
  filterNaN,
  sortData
);

// Set initial state in componentDidMount

export const getState = async () => ({
  ships: await fetchFields(),
  fetched: true
});
