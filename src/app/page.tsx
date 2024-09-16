'use client';

import NoiseMap from '@/components/NoiseMap/noise-map';
import NoiseMapProvider, { useNoiseMapContext } from '@/contexts/noise-map';
import { Input } from '@nextui-org/react';

export default function Home() {
  return (
    <NoiseMapProvider>
      <div className="flex flex-col min-h-screen min-w-96">
        <div className="flex-grow p-3">
          <NoiseMap />
        </div>
        <div className="flex flex-row flex-wrap gap-3 md:gap-10 px-5 md:px-10 py-5">
          <NoiseMapControls />
        </div>
      </div>
    </NoiseMapProvider>
  );
}

const NoiseMapControls = () => {
  const {
    noiseMapData,
    setNoiseMapData,
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
  } = useNoiseMapContext();

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<any>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  return (
    <div className="flex flex-row flex-wrap gap-3 md:gap-10 px-5 md:px-10 py-5">
      <Input
        color="primary"
        value={noiseMapData.terrainSeed}
        size="lg"
        label="Terrain Seed"
        labelPlacement="outside"
        variant="bordered"
        startContent={<></>}
        className="min-w-16 w-16 md:w-32"
        onChange={(e) =>
          setNoiseMapData({ ...noiseMapData, terrainSeed: e.target.value })
        }
      />
      <Input
        color="primary"
        value={scale}
        size="lg"
        label="Scale"
        labelPlacement="outside"
        variant="bordered"
        className="min-w-16 w-16 md:w-32"
        onChange={handleChange(setScale)}
      />
      <Input
        color="primary"
        value={tileStyle}
        size="lg"
        label="Style"
        labelPlacement="outside"
        variant="bordered"
        className="min-w-16 w-16 md:w-32"
        onChange={handleChange(setTileStyle)}
      />
      <Input
        color="primary"
        value={frequency}
        size="lg"
        label="Frequency"
        labelPlacement="outside"
        variant="bordered"
        className="min-w-16 w-16 md:w-32"
        onChange={handleChange(setFrequency)}
      />
      <Input
        color="primary"
        value={lacunarity}
        size="lg"
        label="Lacunarity"
        labelPlacement="outside"
        variant="bordered"
        className="min-w-16 w-16 md:w-32"
        onChange={handleChange(setLacunarity)}
      />
      <Input
        color="primary"
        value={octaves}
        size="lg"
        label="Octaves"
        labelPlacement="outside"
        variant="bordered"
        className="min-w-16 w-16 md:w-32"
        onChange={handleChange(setOctaves)}
      />
      <Input
        color="primary"
        value={persistence}
        size="lg"
        label="Persistence"
        labelPlacement="outside"
        variant="bordered"
        className="min-w-16 w-16 md:w-32"
        onChange={handleChange(setPersistence)}
      />
    </div>
  );
};
