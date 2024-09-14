import NoiseMap from '@/components/NoiseMap';
import { Input } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow p-3">
        <NoiseMap />
      </div>
      <div className="flex px-10 py-2 bottom-3 gap-10">
        <Input
          color="primary"
          label="Terrain Seed"
          labelPlacement="outside"
          variant="bordered"
        />
        <Input
          color="primary"
          label="Scale"
          labelPlacement="outside"
          variant="bordered"
        />
        <Input
          color="primary"
          label="Style"
          labelPlacement="outside"
          variant="bordered"
        />
        <Input
          color="primary"
          label="Frequency"
          labelPlacement="outside"
          variant="bordered"
        />
        <Input
          color="primary"
          label="Lacunarity"
          labelPlacement="outside"
          variant="bordered"
        />
        <Input
          color="primary"
          label="Octaves"
          labelPlacement="outside"
          variant="bordered"
        />
        <Input
          color="primary"
          label="Persistence"
          labelPlacement="outside"
          variant="bordered"
        />
      </div>
    </div>
  );
}
