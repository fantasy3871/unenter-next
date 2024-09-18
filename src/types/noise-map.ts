import { ReactNode } from 'react';

// Define the shape of WorldData
export type WorldDataType = {
  uuid: string;
  name: string;
  description: string;
  grasslandLevel: number;
  waterLevel: number;
  terrainSeed: string;
  temperatureSeed: string;
  humiditySeed: string;
  civilizationSeed: string;
  floraSeed: string;
  faunaSeed: string;
};

// Define the context type
export type NoiseMapContextType = {
  worldData: WorldDataType;
  setWorldData: React.Dispatch<React.SetStateAction<WorldDataType>>;
  terrainLayers: TerrainLayer[];
  setTerrainLayers: React.Dispatch<React.SetStateAction<TerrainLayer[]>>;
  tileStyle: string;
  setTileStyle: React.Dispatch<React.SetStateAction<string>>;
  scale: string;
  setScale: React.Dispatch<React.SetStateAction<string>>;
  frequency: string;
  setFrequency: React.Dispatch<React.SetStateAction<string>>;
  lacunarity: string;
  setLacunarity: React.Dispatch<React.SetStateAction<string>>;
  octaves: string;
  setOctaves: React.Dispatch<React.SetStateAction<string>>;
  persistence: string;
  setPersistence: React.Dispatch<React.SetStateAction<string>>;
  tileSize: number;
  setTileSize: React.Dispatch<React.SetStateAction<number>>;
};

// Define the input type of createNoiseFunction
export type NoiseOptions = {
  amplitude?: number;
  frequency?: number;
  lacunarity?: number;
  octaves?: number;
  persistence?: number;
};

// Define the shape of NoiseMapProps for the provider component
export type NoiseMapProps = {
  children: ReactNode;
};

// Define the shape of TerrainLayer
export type TerrainLayer = {
  name: string;
  starts: number;
  color: string;
};

export type RGB = {
  r: number;
  g: number;
  b: number;
};
