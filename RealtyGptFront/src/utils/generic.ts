const DEFAULT_MIN_VALUE = 0;
const DEFAULT_MAX_VALUE = 100;

export const getRndInteger = (min: number = DEFAULT_MIN_VALUE, max: number = DEFAULT_MAX_VALUE) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
