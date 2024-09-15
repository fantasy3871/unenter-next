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
      <div className="flex flex-col min-h-screen min-w-96">
        <div className="flex-grow p-3">
          <NoiseMap />
        </div>
        <div className="flex flex-row flex-wrap gap-10 px-10 py-5">
          <Input
            color="primary"
            size="lg"
            label="Terrain Seed"
            labelPlacement="outside"
            variant="bordered"
            startContent={<></>}
            className="min-w-32 w-32 lg:w-64"
          />
          {labels.map((label, i) => (
            <Input
              key={`input ${i}`}
              color="primary"
              size="lg"
              label={label}
              labelPlacement="outside"
              variant="bordered"
              className="min-w-32 w-32 lg:w-64"
            />
          ))}
        </div>
      </div>
    </NoiseMapContext>
  );
}
