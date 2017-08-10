import {rootReducer} from './index.js'

// tobe - Stict equals

describe('root reducer', () => {
    it('will increment on action INCREMENT', () => {
        expect(rootReducer(0, {type:'INCREMENT'})).toBe(1)
    })
    it('will not increment on any other type', () => {
        expect(rootReducer(0, 'SOMETHING_ELSE')).not.toBe(1);
    })
})