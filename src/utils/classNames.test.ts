import { describe, expect, it } from 'vitest';

import { cn } from '@/utils/classNames';

describe('cn', () => {
  it('joins truthy class names', () => {
    expect(cn('button', false, 'button-primary', null, undefined)).toBe('button button-primary');
  });
});
