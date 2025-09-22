// Simple seeded random function to ensure consistency between server and client
export const seededRandom = (seed: number): number => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Generate a seeded random array for consistent positioning
export const generateSeededPositions = (count: number, baseSeed: number = 12345) => {
  return Array.from({ length: count }, (_, i) => {
    const seed = baseSeed + i * 123.456;
    return {
      left: seededRandom(seed + 1) * 100,
      top: seededRandom(seed + 2) * 100,
      duration: 3 + seededRandom(seed + 3) * 2,
      delay: seededRandom(seed + 4) * 2,
      animationDelay: seededRandom(seed + 5) * 2,
      animationDuration: 2 + seededRandom(seed + 6) * 3,
    };
  });
};