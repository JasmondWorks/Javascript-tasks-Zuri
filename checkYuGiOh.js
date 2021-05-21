// YU GI OH
function checkYuGiOh(n) {
    var positiveIntegers = [];
    var count = 1;
    while (count <= n) {
        if (count % 2 === 0 && count % 3 === 0 && count % 5 === 0) {
            positiveIntegers.push("yu-gi-oh")
        } else if (count % 2 === 0 && count % 3 === 0) {
            positiveIntegers.push("yu-gi")
        } else if (count % 3 === 0 && count % 5 === 0) {
            positiveIntegers.push("gi-oh")
        } else if (count % 2 === 0 && count % 5 === 0) {
            positiveIntegers.push("yu-oh")
        } else if (count % 2 === 0) {
            positiveIntegers.push("yu")
        } else if (count % 3 === 0) {
            positiveIntegers.push("gi")
        } else if (count % 5 === 0) {
            positiveIntegers.push("oh")
        } else {
            positiveIntegers.push(count);
        }
        count++;
    }
    if (typeof n == "boolean") {
        return "Invalid parameter: " + "'" + n + " is meh" + "'";
    } else if (n == Number(n)) {
        return positiveIntegers;
    } else {
        return "Invalid parameter: " + "'" + n + " is meh" + "'";
    }
}
checkYuGiOh();