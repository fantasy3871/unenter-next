'use client';

import { DEFAULT_NOISE_MAP_CONTEXT } from '@/constants/noise-map';
import { NoiseMapContextType, NoiseMapDataType } from '@/types/noise-map';
import { createContext, ReactNode, useContext, useState } from 'react';

// Create the default context value
export const defaultContextValue = {
  ...DEFAULT_NOISE_MAP_CONTEXT,
  setNoiseMapData: () => {},
  setTerrainLayers: () => {},
  setTileStyle: () => {},
  setScale: () => {},
  setFrequency: () => {},
  setLacunarity: () => {},
  setOctaves: () => {},
  setPersistence: () => {},
  setTileSize: () => {},
};

// Create the context
export const NoiseMapContext =
  createContext<NoiseMapContextType>(defaultContextValue);

// NoiseMapProvider component
const NoiseMapProvider = ({ children }: { children: ReactNode }) => {
  const [noiseMapData, setNoiseMapData] = useState<NoiseMapDataType>(
    DEFAULT_NOISE_MAP_CONTEXT.noiseMapData
  );
  const [terrainLayers, setTerrainLayers] = useState(
    DEFAULT_NOISE_MAP_CONTEXT.terrainLayers
  );
  const [tileStyle, setTileStyle] = useState(
    DEFAULT_NOISE_MAP_CONTEXT.tileStyle
  );
  const [scale, setScale] = useState(DEFAULT_NOISE_MAP_CONTEXT.scale);
  const [frequency, setFrequency] = useState(
    DEFAULT_NOISE_MAP_CONTEXT.frequency
  );
  const [lacunarity, setLacunarity] = useState(
    DEFAULT_NOISE_MAP_CONTEXT.lacunarity
  );
  const [octaves, setOctaves] = useState(DEFAULT_NOISE_MAP_CONTEXT.octaves);
  const [persistence, setPersistence] = useState(
    DEFAULT_NOISE_MAP_CONTEXT.persistence
  );
  const [tileSize, setTileSize] = useState(DEFAULT_NOISE_MAP_CONTEXT.tileSize);

  // Add other settings and state management here...

  return (
    <NoiseMapContext.Provider
      value={{
        noiseMapData,
        setNoiseMapData,
        terrainLayers,
        setTerrainLayers,
        tileStyle,
        setTileStyle,
        scale,
        setScale,
        frequency,
        setFrequency,
        lacunarity,
        setLacunarity,
        octaves,
        setOctaves,
        persistence,
        setPersistence,
        tileSize,
        setTileSize,
      }}
    >
      {children}
    </NoiseMapContext.Provider>
  );
};

// Custom hook to use the NoiseMap context
export const useNoiseMapContext = () => useContext(NoiseMapContext);

export default NoiseMapProvider;
