import { describe, expect, test } from '@jest/globals';
import { classNames } from './classNames';

describe('classNames', () => {
    test('should return someClass', () => {
        expect(classNames({ className: 'someClass' })).toBe('someClass');
    });
});
