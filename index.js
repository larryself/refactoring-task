export function findFirstAvailableLastIndex(inputString, substring1, substring2) {
    if (inputString.match(/^$/)) {
        return -1;
    }
    let i = inputString.length - 1;
    let substring1Index = -1;
    let substring2Index = -1;
    while (i > 0) {
        if (inputString.substring(i, i + 1) === substring1) {
            substring1Index = i;
            break;
        }
        if (inputString.substring(i, i + 1) === substring2) {
            substring2Index = i;
            break;
        }
        i = i - 1;
    }
    if (substring1Index !== -1) {
        if (substring2Index === -1) {
            return substring1Index;
        }
        return Math.max(substring1Index, substring2Index);
    }
    if (substring2Index !== -1) {
        return substring2Index;
    }
    return -1;

}