import { ReactNode } from 'react';

// Define the shape of NoiseMapData
export type NoiseMapDataType = {
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
  noiseMapData: NoiseMapDataType;
  setNoiseMapData: React.Dispatch<React.SetStateAction<NoiseMapDataType>>;
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
  tileSize: string;
  setTileSize: React.Dispatch<React.SetStateAction<string>>;
};

// Define the shape of TerrainLayer
export type TerrainLayer = {
  name: string;
  starts: number;
  color: string;
};

// Define the shape of NoiseMapProps for the provider component
export type NoiseMapProps = {
  children: ReactNode;
};
