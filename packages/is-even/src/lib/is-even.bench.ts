import { bench } from 'vitest';
import { isEven } from './is-even';

bench('isEven', () => {
  isEven(0);
});
