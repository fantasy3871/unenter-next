'use client';

import { defineHex, Grid, Hex, Orientation, rectangle } from 'honeycomb-grid';
import { Application, Container, Graphics } from 'pixi.js';
import { useEffect, useRef } from 'react';

import { TILE } from '@/constants/noise-map';
import { useNoiseMapContext } from '@/contexts/noise-map';
import {
  applyShadeAndFindMidpoint,
  createNoiseFunction,
  drawHex,
  getColor,
  getNoiseShade,
  getShade,
} from '@/helpers/noise-map';

export default function NoiseMap() {
  const {
    worldData,
    scale,
    tileStyle,
    frequency,
    lacunarity,
    octaves,
    persistence,
    tileSize,
    terrainLayers,
  } = useNoiseMapContext();

  const app = useRef<Application | null>(null); // Store the Pixi Application here
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Reference for the HTML canvas element
  const gridRef = useRef<Grid<Hex> | null>(null);

  const mapNoise2D = createNoiseFunction(worldData.terrainSeed, {
    amplitude: 1,
    frequency: frequency,
    lacunarity: lacunarity,
    octaves: octaves,
    persistence: persistence,
  });

  const Tile = defineHex({
    dimensions: tileSize,
    origin: 'topLeft',
    orientation: Orientation.POINTY, // Set this dynamically if needed
  });

  // Function to resize the canvas to match its parent element's size
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    }
  };

  useEffect(() => {
    console.log('here');
    const graphics = new Graphics();
    const stageContainer = new Container();
    const generateMap = (): void => {
      graphics.clear();

      const tile = new Tile();
      let width: number, height: number;

      switch (worldData.orientation) {
        case Orientation.POINTY:
          width = Math.floor(canvasRef.current!.clientWidth / tile.width);
          height = Math.floor(
            canvasRef.current!.clientHeight / ((3 / 4) * tile.height)
          );
          break;
        case Orientation.FLAT:
          width = Math.floor(
            canvasRef.current!.clientWidth / ((3 / 4) * tile.width)
          );
          height = Math.floor(canvasRef.current!.clientHeight / tile.height);
          break;
        default:
          console.error('Invalid orientation');
          width = Math.floor(canvasRef.current!.clientWidth / tile.width);
          height = Math.floor(canvasRef.current!.clientHeight / tile.height);
      }

      gridRef.current = new Grid(Tile, rectangle({ width, height }));

      gridRef.current.forEach((hex) => {
        const elevation = mapNoise2D(hex.x / scale, hex.y / scale);
        let fillColor: string;

        switch (tileStyle) {
          case TILE.STYLES.FLAT:
            fillColor = getColor(elevation, terrainLayers);
            break;
          case TILE.STYLES.NOISE:
            fillColor = getNoiseShade(elevation);
            break;
          case TILE.STYLES.TERRAIN:
            fillColor = applyShadeAndFindMidpoint(
              getColor(elevation, terrainLayers),
              getShade(elevation)
            );
            break;
          default:
            console.error('Invalid tile style');
            fillColor = '#474544';
        }

        drawHex(hex, graphics, { fillColor });
      });
    };
    // Initialize Pixi.js application only once
    if (canvasRef.current) {
      app.current = new Application();
      app.current.init({
        canvas: canvasRef.current, // Pass the actual HTMLCanvasElement here
        antialias: true,
        backgroundColor: 0x242120, // Replace background as a color hex value
        resizeTo: canvasRef.current.parentElement ?? undefined, // Resize according to its parent
      });
    }

    resizeCanvas();
    generateMap();

    stageContainer.addChild(graphics);
    app.current?.stage.addChild(stageContainer);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      // app.current?.destroy(true); // Clean up the application on unmount
    };
  }, [
    frequency,
    lacunarity,
    octaves,
    persistence,
    scale,
    tileStyle,
    tileSize,
    terrainLayers,
    worldData.orientation,
    worldData.terrainSeed,
    Tile,
    mapNoise2D,
  ]);

  return (
    <div className="flex-grow m-3 overflow-hidden">
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
