export function findFirstAvailableLastIndex(inputString, ...substring) {
    let i = inputString.length - 1;
    while (i > 0) {
        if (substring.includes(inputString.substring(i, i + 1))) {
           return  i;
        }
        i = i - 1;
    }
    return -1;
}