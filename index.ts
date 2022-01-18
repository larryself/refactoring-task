// Поиск побуквенно одной или более букв(letters) в строке(inputString) с конца по вторую букву строки
// в случаи нахождения возвращается индекс первой найденной буквы
// если совпадений не найдено возвращается -1

export function findFirstAvailableLastIndex(inputString : string, ...letters: string[]): number {
    for (let i = inputString.length - 1; i > 0; i -= 1) {
        if (letters.includes(inputString[i])) {
            return i;
        }
    }
    return -1;
}