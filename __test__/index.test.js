import {findFirstAvailableLastIndex as func } from "../index";
describe('findFirstAvailableLastIndex', () => {
        it('1', () => {
            expect(func('абвгде', 'д', 'e')).toBe(4);
        })
        it('2', () => {
            expect(func('abcde', 'e', 'd')).toBe(4);
        })
        it('3', () => {
            expect(func('', 'b', 'a')).toBe(-1);
        })
        it('4', () => {
            expect(func('abcde', '', 'b')).toBe(1);
        })
        it('5', () => {
            expect(func('abcde', 'b', '')).toBe(1);
        })
        it('6', () => {
            expect(func('abcde', 'c', 'c')).toBe(2);
        })
        it('7', () => {
            expect(func('abcde', 'a', '')).toBe(-1);
        })
        it('8', () => {
            expect(func('abcde', '', 'a')).toBe(-1);
        })
        it('9', () => {
            expect(func('abacdae', 'b', 'a')).toBe(5);
        })
    }
)
