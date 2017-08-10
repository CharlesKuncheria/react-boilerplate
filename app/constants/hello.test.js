import {sayBoth} from './hello.js'

describe('Constants Test', () => {
    it('When sayBoth called', () => {
        expect(sayBoth('a','b')).toBe('ab');
    });
});