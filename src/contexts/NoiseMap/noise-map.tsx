'use client';
import { createContext, ReactNode, useState } from 'react';

// Define the shape of your message data
type NoiseMapDataType = {
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

type NoiseMapContextType = {
  message: NoiseMapDataType | null;
  setMessage: React.Dispatch<React.SetStateAction<NoiseMapDataType | null>>;
};

type NoiseMapProps = {
  children: ReactNode;
};

// Initialize the context with null initially
export const NoiseMapContext = createContext<NoiseMapContextType | null>(null);

const NoiseMapProvider = ({ children }: NoiseMapProps) => {
  const [message, setMessage] = useState<NoiseMapDataType | null>(null);

  return (
    <NoiseMapContext.Provider value={{ message, setMessage }}>
      {children}
    </NoiseMapContext.Provider>
  );
};

export default NoiseMapProvider;
