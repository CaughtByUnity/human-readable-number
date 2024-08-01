module.exports = function toReadable(number) {
    let hundredsCount = Math.floor(number / 100)
    let tensCount = Math.floor(number / 10)
    let firstOrderNumbersCount = Math.floor(number % 10)
    const firstOrderNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
    const secondOrderNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const convertToString = String(number)
    const convertToArray = convertToString.split('')
    let readableArray = []
    if (tensCount <= 2 && number <= 20) {
        return firstOrderNumbers[number]
    }
    if (tensCount < 10 && number > 20 && number % 10 == 0) {
        return secondOrderNumbers[tensCount - 2]
    }
    if (tensCount < 10 && number > 20) {
        return secondOrderNumbers[tensCount - 2] + ' ' + firstOrderNumbers[firstOrderNumbersCount]
    }
    if (hundredsCount < 10 && number < 1000 && number % 100 == 0) {
        return firstOrderNumbers[hundredsCount] + ' hundred'
    }
    if (hundredsCount >= 1 && number < 1000 && number % 100 < 20) {
        return firstOrderNumbers[hundredsCount] + ' hundred ' + firstOrderNumbers[number % 100]
    }
    if (hundredsCount >= 1 && number < 1000 && number % 10 != 0) {
        return firstOrderNumbers[hundredsCount] + ' hundred ' + secondOrderNumbers[tensCount % 10 - 2] + ' ' + firstOrderNumbers[firstOrderNumbersCount]
    } else {
        return firstOrderNumbers[hundredsCount] + ' hundred ' + secondOrderNumbers[tensCount % 10 - 2]
    }
}

