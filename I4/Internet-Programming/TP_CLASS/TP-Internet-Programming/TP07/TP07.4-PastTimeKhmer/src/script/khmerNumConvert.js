function ConvertNumber(num){
    const khmerNum = ["០","១","២","៣","៤","៥","៦","៧","៨","៩"]
    let result = '';
    const numString = num.toString();
    for(let i = 0; i < numString.length; i++) {
        const digit = parseInt(numString.charAt(i));
        result += khmerNum[digit];
    }
    return result;
}
export {ConvertNumber};