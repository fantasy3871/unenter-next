import NoiseMap from '@/components/NoiseMap';
import { Input } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow p-3">
        <NoiseMap />
      </div>
      <div className="flex px-10 py-5 gap-10">
        <Input
          color="primary"
          size="lg"
          label="Terrain Seed"
          labelPlacement="outside"
          variant="bordered"
          startContent={<></>}
        />
        <Input
          color="primary"
          size="lg"
          label="Scale"
          labelPlacement="outside"
          variant="bordered"
        />
        <Input
          color="primary"
          size="lg"
          label="Style"
          labelPlacement="outside"
          variant="bordered"
        />
        <Input
          color="primary"
          size="lg"
          label="Frequency"
          labelPlacement="outside"
          variant="bordered"
        />
        <Input
          color="primary"
          size="lg"
          label="Lacunarity"
          labelPlacement="outside"
          variant="bordered"
        />
        <Input
          color="primary"
          size="lg"
          label="Octaves"
          labelPlacement="outside"
          variant="bordered"
        />
        <Input
          color="primary"
          size="lg"
          label="Persistence"
          labelPlacement="outside"
          variant="bordered"
        />
      </div>
    </div>
  );
}
