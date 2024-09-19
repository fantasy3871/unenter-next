'use client';

import { Input, Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import {
  AlertIcon,
  CheckIcon,
  CopyIcon,
  DiceIcon1,
  DiceIcon2,
  DiceIcon3,
  DiceIcon4,
  DiceIcon5,
  DiceIcon6,
} from '@/components/assets/icons';
import NoiseMap from '@/components/NoiseMap/noise-map';
import { TILE } from '@/constants/noise-map';
import NoiseMapProvider, { useNoiseMapContext } from '@/contexts/noise-map';

const diceIcons = [
  <></>,
  <DiceIcon1 key={`dice-1`} />,
  <DiceIcon2 key={`dice-2`} />,
  <DiceIcon3 key={`dice-3`} />,
  <DiceIcon4 key={`dice-4`} />,
  <DiceIcon5 key={`dice-5`} />,
  <DiceIcon6 key={`dice-6`} />,
];

const getCopyStatusIcon = (icon: string) => {
  switch (icon) {
    case 'check':
      return <CheckIcon />;
    case 'alert':
      return <AlertIcon />;
    default:
      return <CopyIcon />;
  }
};

const getDiceIcon = (diceValue: number) => diceIcons[diceValue] || <></>;

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

  const [icon, setIcon] = useState('copy');
  const [diceValue, setDiceValue] = useState(6);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<any>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(Number(e.target.value));
    };

  const handleCopyToClipboard = async () => {
    try {
      console.log(worldData.terrainSeed);
      await navigator.clipboard.writeText(worldData.terrainSeed); // Copy to clipboard
      setIcon('check'); // Change icon to check mark
      setTimeout(() => {
        setIcon('copy'); // Revert back to copy icon after 1.5 seconds
      }, 1500);
    } catch (error) {
      console.error('Failed to copy:', error); // Log any errors
      setIcon('alert'); // Show alert icon in case of error
      setTimeout(() => {
        setIcon('copy'); // Revert back to copy icon after 3 seconds
      }, 3000);
    }
  };

  const handleGenerateRandomUuid = () => {
    setWorldData((prevWorldData) => ({
      ...prevWorldData,
      terrainSeed: uuid(),
    }));

    let newNumber;
    do {
      newNumber = Math.floor(Math.random() * 6) + 1;
    } while (newNumber === diceValue);
    setDiceValue(newNumber);
  };

  return (
    <div className="flex flex-row flex-wrap gap-3 md:gap-10 px-5 md:px-10 py-5">
      <Input
        isDisabled
        color="primary"
        value={worldData.terrainSeed.slice(0, 8)}
        size="lg"
        label="Terrain Seed"
        labelPlacement="outside"
        variant="bordered"
        startContent={
          <button
            className="cursor-pointer"
            onClick={handleCopyToClipboard}
            style={{ pointerEvents: 'auto' }} // Ensures button remains clickable
          >
            {getCopyStatusIcon(icon)}
          </button>
        }
        endContent={
          <button
            className="cursor-pointer"
            onClick={handleGenerateRandomUuid}
            style={{ pointerEvents: 'auto' }} // Ensures button remains clickable
          >
            {getDiceIcon(diceValue)}
          </button>
        }
        onChange={(e) =>
          setWorldData({ ...worldData, terrainSeed: e.target.value })
        }
        className="min-w-16 w-16 md:w-32 opacity-1"
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
        onChange={handleInputChange(setScale)}
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
        onChange={handleInputChange(setFrequency)}
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
        onChange={handleInputChange(setLacunarity)}
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
        onChange={handleInputChange(setOctaves)}
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
        onChange={handleInputChange(setPersistence)}
      />
    </div>
  );
};

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
