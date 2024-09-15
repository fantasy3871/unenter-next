export const UUID_NIL = '00000000-0000-0000-0000-000000000000';

export const DEFAULT_NOISE_MAP_DATA = {
  uuid: UUID_NIL,
  name: 'Unknown New World',
  description: 'The default null world',
  grasslandLevel: 0.5,
  waterLevel: 0.1,
  terrainSeed: '8ffed77f-64d8-46f6-a376-9d364d28c4d9',
  temperatureSeed: '7aab335f-64d8-46f6-a376-9d364d28c4d9',
  humiditySeed: '6f9354af-1234-8d1f-a376-9d364d28c4d9',
  civilizationSeed: '5fa3277f-64d8-46f6-a376-9d364d28c4d9',
  floraSeed: '8eeaf122-64d8-46f6-a376-9d364d28c4d9',
  faunaSeed: '9dfb1994-64d8-46f6-a376-9d364d28c4d9',
};

export const DEFAULT_TERRAIN_LAYERS = [
  {
    name: 'Trench',
    starts: -1.0,
    color: '#283C54',
  },
  {
    name: 'Deep Sea',
    starts: -0.9,
    color: '#304864',
  },
  {
    name: 'Water',
    starts: -0.7,
    color: '#395476',
  },
  {
    name: 'Grassland',
    starts: 0.2,
    color: '#4d6d35',
  },
  {
    name: 'Mountain',
    starts: 0.6,
    color: '#937347',
  },
  {
    name: 'Peak',
    starts: 0.9,
    color: '#5D5141',
  },
];

export const TILE = {
  STYLE: {
    FLAT: 'Flat',
    NOISE: 'Noise',
    TERRAIN: 'Terrain',
  },
};
