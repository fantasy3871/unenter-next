import alea from 'alea';

import { COLOR_EMPTY } from '@/constants/noise-map';
import { NoiseOptions, RGB, TerrainLayer } from '@/types/noise-map';
import { Hex } from 'honeycomb-grid';
import { Graphics } from 'pixi.js';
import { createNoise2D } from 'simplex-noise';

export const createNoiseFunction = (seed: string, options: NoiseOptions) => {
  const noise = createNoise2D(alea(uuidToNumber(seed)));

  return (x: number, y: number) => {
    let value = 0;
    let amplitudeSum = 0;
    let localAmplitude = options.amplitude;
    let localFrequency = options.frequency;
    for (let i = 0; i < options.octaves; i++) {
      value += noise(x * localFrequency, y * localFrequency) * localAmplitude;
      localFrequency *= options.lacunarity;
      amplitudeSum += localAmplitude;
      localAmplitude *= options.persistence;
    }
    return value / amplitudeSum;
  };
};

export const drawHex = (
  hex: Hex,
  graphics: Graphics,
  {
    lineColor = '#242120',
    fillColor = '#395476',
  }: { lineColor?: string; fillColor?: string } = {}
): void => {
  graphics.poly(
    hex.corners.map((corner) => ({
      x: corner.x,
      y: corner.y,
    }))
  );
  graphics.fill(fillColor);
  graphics.stroke({ width: 1, color: lineColor });
};

export const getShade = (elevation: number): number => {
  const shade = Math.round((elevation + 1) * 255); // Shade
  return shade;
};

export const getColor = (
  elevation: number,
  terrainLayers: TerrainLayer[]
): string => {
  let color = COLOR_EMPTY;
  for (const layer of terrainLayers) {
    if (elevation > layer.starts) {
      color = layer.color;
    }
  }
  return color;
};

export const getNoiseShade = (
  level: number,
  { ceiling = 1, floor = -1 }: { ceiling?: number; floor?: number } = {}
): string => {
  let shade: number;
  if (level < floor) {
    shade = 255;
  } else if (level > ceiling) {
    shade = 0;
  } else {
    // Normalize level to range between 0 and 255
    const normalizedLevel = (1 - (level - floor) / (ceiling - floor)) * 255;
    shade = Math.round(normalizedLevel);
  }
  return `rgb(${shade}, ${shade}, ${shade})`;
};

export const hexToRgb = (hex: string): RGB => {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

export const rgbToHex = ({ r, g, b }: RGB): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
};

export const applyShadeAndFindMidpoint = (
  fillColor: string,
  shade: number
): string => {
  const rgb = hexToRgb(fillColor);
  const shadedRgb = {
    r: Math.round((rgb.r * shade) / 255),
    g: Math.round((rgb.g * shade) / 255),
    b: Math.round((rgb.b * shade) / 255),
  };
  const midpointRgb = {
    r: Math.round((rgb.r + shadedRgb.r) / 2),
    g: Math.round((rgb.g + shadedRgb.g) / 2),
    b: Math.round((rgb.b + shadedRgb.b) / 2),
  };
  return rgbToHex(midpointRgb);
};

export const uuidToNumber = (uuid: string): bigint => {
  const hex = uuid.replace(/-/g, '');
  const decimal = BigInt(`0x${hex}`);
  return decimal;
};
