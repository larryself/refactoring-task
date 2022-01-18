import {findFirstAvailableLastIndex as func} from "../index";

describe('findFirstAvailableLastIndex', () => {
        it('второй искомый элемент встречается раньше первого искомого элемента', () => {
            expect(func('абвгде', 'д', 'е')).toBe(5);
        })
        it('первый искомый элементр встречается позже второго искомого элемента', () => {
            expect(func('abcde', 'e', 'd')).toBe(4);
        })
        it('Пустая строка', () => {
            expect(func('', 'b', 'a')).toBe(-1);
        })
        it('пустой первый искомый элемент', () => {
            expect(func('abcde', '', 'b')).toBe(1);
        })
        it('пустой второй искомый элемент', () => {
            expect(func('abcde', 'b', '')).toBe(1);
        })
        it('искомые элементы равны', () => {
            expect(func('abcde', 'c', 'c')).toBe(2);
        })
        it('первый искомый элемент в начале строки', () => {
            expect(func('abcde', 'a', '')).toBe(-1);
        })
        it('второй искомый элемент в начале строки', () => {
            expect(func('abcde', '', 'a')).toBe(-1);
        })
        it('искомые элементы не содержатся в стркое ', () => {
            expect(func('abcde', 'q', 'z')).toBe(-1);
        })
        it('несколько повторений искомого', () => {
            expect(func('abacdae', 'b', 'a')).toBe(5);
        })
        it('искомые элементы из двух и более букв', () => {
            expect(func('hello,world', 'llo', 'wo')).toBe(-1);
        })
        it('первый искомый элемент из несколькимх символом , второй из одного символа', () => {
            expect(func('hello,world', 'llo', 'w')).toBe(6);
        })
        it('первый искомый элемент из несколькимх символом', () => {
            expect(func('hello,world', 'w','e','h')).toBe(6);
        })
    }
)
