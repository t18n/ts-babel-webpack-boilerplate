import { add } from '@utils/math';

describe('Service should', () => {
  it('Calc add', () => {
    const total = add(1, 2);
    expect(total).toBe(3);
  });
});
