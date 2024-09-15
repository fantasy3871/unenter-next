import NoiseMap from '@/components/NoiseMap/noise-map';
import NoiseMapContext from '@/contexts/noise-map';
import { Input } from '@nextui-org/react';

const labels = [
  'Scale',
  'Style',
  'Frequency',
  'Lacunarity',
  'Octaves',
  'Persistence',
];

export default function Home() {
  return (
    <NoiseMapContext>
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
            className="min-w-32"
          />
          {labels.map((label, i) => {
            return (
              <Input
                key={`input ${i}`}
                color="primary"
                size="lg"
                label={label}
                labelPlacement="outside"
                variant="bordered"
                className="min-w-32"
              />
            );
          })}
        </div>
      </div>
    </NoiseMapContext>
  );
}
