import { Operations } from './operations';

describe('provideResult', () => {
    it('should return 12 as it is an addition (8+4)', () => {
        const res = Operations.provideResult(8, 4, '+');
        expect(res).toBe('12');
    })

    it('should return 4 as it is a subtraction (8-4)', () => {
        const res = Operations.provideResult(8, 4, '-');
        expect(res).toBe('4');
    })

    it('should return 32 as it is a multiplication (8x4)', () => {
        const res = Operations.provideResult(8, 4, 'X');
        expect(res).toBe('32');
    })
    
    it('should return 2 as it is a division (8/4)', () => {
        const res = Operations.provideResult(8, 4, '/');
        expect(res).toBe('2');
    })

    it('should display an error as it is a division by zero (8/0)', () => {
        const res = Operations.provideResult(8, 0, '/');
        expect(res).toContain('Error');
        expect(res).toContain('ivision');
        expect(res).toContain('ero');
    })
    
    it('should return 4096 as it is an exponentiation (8^4)', () => {
        const res = Operations.provideResult(8, 4, 'Pow');
        expect(res).toBe('4096');
    })

    it('should ask for an operation as it is not provided (8 ? 4)', () => {
        const res = Operations.provideResult(8, 4, ' ');
        expect(res).toContain('select');
        expect(res).toContain('operation');
    })
})