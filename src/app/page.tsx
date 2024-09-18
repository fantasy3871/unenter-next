'use client';

import { Input, Select, SelectItem } from '@nextui-org/react';

import NoiseMap from '@/components/NoiseMap/noise-map';
import { TILE } from '@/constants/noise-map';
import NoiseMapProvider, { useNoiseMapContext } from '@/contexts/noise-map';

export default function Home() {
  return (
    <NoiseMapProvider>
      <div className="flex flex-col h-screen min-w-96">
        <NoiseMap />
        <div className="flex flex-row flex-wrap gap-3 md:gap-10 px-5 md:px-10 py-5">
          <NoiseMapControls />
        </div>
      </div>
    </NoiseMapProvider>
  );
}

const NoiseMapControls = () => {
  const {
    worldData,
    setWorldData,
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
        isDisabled
        color="primary"
        value={worldData.terrainSeed}
        size="lg"
        label="Terrain Seed"
        labelPlacement="outside"
        variant="bordered"
        startContent={<></>}
        className="min-w-16 w-16 md:w-32"
        onChange={(e) =>
          setWorldData({ ...worldData, terrainSeed: e.target.value })
        }
      />
      <Input
        type="number"
        color="primary"
        value={scale.toString()}
        size="lg"
        label="Scale"
        labelPlacement="outside"
        variant="bordered"
        className="min-w-16 w-16 md:w-32"
        onChange={handleChange(setScale)}
      />
      <Select
        color="primary"
        selectedKeys={[tileStyle]}
        size="lg"
        label="Style"
        labelPlacement="outside"
        variant="bordered"
        className="min-w-16 w-16 md:w-32"
        onChange={(e) => setTileStyle(e.target.value)}
      >
        {Object.values(TILE.STYLES).map((style) => (
          <SelectItem key={style} value={style}>
            {style}
          </SelectItem>
        ))}
      </Select>
      <Input
        type="number"
        color="primary"
        value={frequency.toString()}
        size="lg"
        label="Frequency"
        labelPlacement="outside"
        variant="bordered"
        className="min-w-16 w-16 md:w-32"
        onChange={handleChange(setFrequency)}
      />
      <Input
        type="number"
        color="primary"
        value={lacunarity.toString()}
        size="lg"
        label="Lacunarity"
        labelPlacement="outside"
        variant="bordered"
        className="min-w-16 w-16 md:w-32"
        onChange={handleChange(setLacunarity)}
      />
      <Input
        type="number"
        color="primary"
        value={octaves.toString()}
        size="lg"
        label="Octaves"
        labelPlacement="outside"
        variant="bordered"
        className="min-w-16 w-16 md:w-32"
        onChange={handleChange(setOctaves)}
      />
      <Input
        type="number"
        color="primary"
        value={persistence.toString()}
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
