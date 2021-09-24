var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
    if (count <= 0)
        return 'Number cannot be zero/negative'
    while (count != 0) {
        chocolates.unshift(color)
        count--;
    }

}


//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(number, chocolates) {
    let arr = []
    if (chocolates > number.length)
        return 'Insufficient chocolates in the dispenser'
    else if (chocolates == number.length)
        return number
    else if (chocolates <= 0)
        return 'Number cannot be zero/negative'
    else {
        while (chocolates != 0) {
            arr.push(number.shift())
            chocolates--
        }
        return arr


    }

}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
    let arr = []

    if (number > chocolates.length)
        return 'Insufficient chocolates in the dispenser'
    else if (number <= 0)
        return 'Number cannot be zero/negative'
    else {
        while (number != 0) {
            number--
            arr.push(chocolates.pop())
        }
        return arr

    }
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
    let arr = []
    if (number > chocolates.length)
        return 'Insufficient chocolates in the dispenser'
    else if (number <= 0)
        return 'Number cannot be zero/negative'
    else {
        while (number != 0) {
            number--
            arr.push(chocolates.pop())
        }
        return arr
    }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolate) {
    let arr = []
    if (chocolate.length == 0)
        return arr
    else {
        let uniquearr = [...new Set(chocolate)]
        for (const i of uniquearr) {
            let count = 0
            for (const j of chocolate) {
                if (i === j)
                    count += 1

            }
            arr.push(count)

        }


        return arr
    }

}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolate) {
    console.log(chocolate)
    let arr = []
    let temp = []
    let output = []
    let uniquearr = [...new Set(chocolate)]
    for (const i of uniquearr) {
        let count = 0
        for (const j of chocolate) {
            if (i === j)
                count += 1

        }
        temp.push(count)
        arr.push([i, count])


    }

    temp.sort().reverse()
    for (const i of temp) {
        for (const j of arr) {
            let value = j[1]
            if (i === value)
                output.push(j[0])

        }


    }
    output = [...new Set(output)]
    console.log(output)
    return chocolate






}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolate, number, color, finalcolor) {
    let uniquearr = [...new Set(chocolate)]

    if (chocolate.length == 0)
        return []
    else if (number <= 0)
        return 'Number cannot be zero/negative'
    else if (uniquearr.length === 1) {
        if (uniquearr[0] === finalcolor)
            return "Can't replace the same chocolates"
        else {
            chocolate[0] = finalcolor
            return chocolate
        }
    }

    else {
        for (let index = 0; index < chocolate.length; index++) {
            const element = chocolate[index];
            if (element == color)
                chocolate[index] = finalcolor


        }
        return chocolate
    }
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolate, color, finalcolor) {
    let uniquearr = [...new Set(chocolate)]

    if (chocolate.length === 0)
        return new Array(0, chocolate)
    else if (uniquearr.length === 1) {
        if (uniquearr[0] === finalcolor)
            return "Can't replace the same chocolates"
        else {
            chocolate[0] = finalcolor
            return new Array(1, chocolate)
        }
    }

    else {
        let count = 0
        for (let index = 0; index < chocolate.length; index++) {
            const element = chocolate[index]
            if (element === color) {
                chocolate[index] = finalcolor
                count++
            }

        }
        return new Array(chocolate.length - count, chocolate)

    }

}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
