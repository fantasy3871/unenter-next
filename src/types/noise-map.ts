import { ReactNode } from 'react';

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

export type NoiseMapContextType = {
  message: NoiseMapDataType | null;
  setMessage: React.Dispatch<React.SetStateAction<NoiseMapDataType | null>>;
};

export type NoiseMapProps = {
  children: ReactNode;
};
