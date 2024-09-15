'use client';
import {
  NoiseMapContextType,
  NoiseMapDataType,
  NoiseMapProps,
} from '@/types/noise-map';
import { createContext, useState } from 'react';

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
