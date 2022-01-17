import {findFirstAvailableLastIndex as func} from "../index";

describe('findFirstAvailableLastIndex', () => {
        it('substring2 встречается раньше substring1 при поиске с конца строки', () => {
            expect(func('абвгде', 'д', 'е')).toBe(5);
        })
        it('substring1 встречается раньше substring2 при поиске с конца строки', () => {
            expect(func('abcde', 'e', 'd')).toBe(4);
        })
        it('Пустая строка', () => {
            expect(func('', 'b', 'a')).toBe(-1);
        })
        it('пустой substring1', () => {
            expect(func('abcde', '', 'b')).toBe(1);
        })
        it('пустой substring2', () => {
            expect(func('abcde', 'b', '')).toBe(1);
        })
        it('substring1 равен substring2', () => {
            expect(func('abcde', 'c', 'c')).toBe(2);
        })
        it('substring1 в начале строки', () => {
            expect(func('abcde', 'a', '')).toBe(-1);
        })
        it('substring2 в начале строки', () => {
            expect(func('abcde', '', 'a')).toBe(-1);
        })
        it('substring1, substring2 не содержатся в строке', () => {
            expect(func('abcde', 'q', 'z')).toBe(-1);
        })
        it('несколько повторений искомого', () => {
            expect(func('abacdae', 'b', 'a')).toBe(5);
        })
    }
)
