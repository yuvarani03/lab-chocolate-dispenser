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
let addChocolates = (chocolates,color,count) => {
    if(count>0){
        for(let i = 0 ; i<count ; i++){
         chocolates.unshift(color);
        }
    }
else{
    return "Number cannot be zero/negative";
}
}
    


//Progression 2: Remove ___ chocolates from the top the dispenser
let removeChocolates = (chocolates, number) => {
    let removechoky = [];
    if (chocolates.length < number) {
        return "Insufficient chocolates in the dispenser";
    }
    else if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    for (let i = 0; i < number; i++) {
        removechoky.push(chocolates.shift());
    }
    return removechoky;
}


//Progression 3: Dispense ___ chocolates
let dispenseChocolates = (chocolates, number) => {
    let dispancechoky = [];
    if (chocolates.length < number) {
        return "Insufficient chocolates in the dispenser";
    }
    else if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    for (let i = 0; i < number; i++) {
        dispancechoky.push(chocolates.pop());
    }
    return dispancechoky;
}


//Progression 4: Dispense ___ chocolates of ____ color
let dispenseChocolatesOfColor = (chocolates,number, color) => {
    let dispancechokyclr = [];
    let count = 0;
    if (chocolates.length < number) {
        return "Insufficient chocolates in the dispenser";
    }
    else if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    for (let i = chocolates.length - 1; i >= 0; i--) {
        if (chocolates[i] == color) {
            dispancechokyclr.push(chocolates.pop())
            count++
        if (count == number) 
            return dispancechokyclr;
        }
    }
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
let noOfChocolates = (chocolates) => {
    let nchoky = [];
    for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] !== 0) {
            let count = 1;
            for (let j = i + 1; j < chocolates.length; j++) {
                if (chocolates[i] == chocolates[j]) {
                    count++;
                    chocolates[j] = 0;
                }
            }
            nchoky.push(count);
        }
    }
    return nchoky;
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
let sortChocolateBasedOnCount = (chocolates) => {
    let choky = chocolates.reduce((color, count) =>{
        if(count in color){
            color[count]++
        }
        else{
            color[count] = 1
        }
        return color;
    }, {});
    let arr = chocolates.sort((color, count) =>{
        if (choky[count]>choky[color]) {
            return 1;
        }
        if (choky[count]<choky[color]) {
            return -1;
        }
        if(color>count)
        {
            return 1;
        }
        if(color<count)
        {
            return -1;
        }
    });
chocolates = arr;
}


//Progression 7: Change ___ chocolates of ____ color to ____ color
let changeChocolateColor = (chocolates,number, color, finalColor) => {
    if(color == finalColor)
    return "Can't replace the same chocolates";
    else if(number > 0)
    {
        for(let i = chocolates.length;i>=0;i--){
            if(chocolates[i]==color)
            chocolates[i] = finalColor;
        }
        return chocolates;
    }
    else
    return "Number cannot be zero/negative";
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
let changeChocolateColorAllOfxCount = (chocolates,color, finalColor) =>{
    if(color == finalColor){
    return "Can't replace the same chocolates";
    }
    else 
    for(let i = chocolates.length;i>=0;i++){
        if(chocolates[i]==color)
        chocolates[i] = finalColor; 
    }
    return [chocolates.length, chocolates];
}

