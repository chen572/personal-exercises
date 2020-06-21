function splice(arr, index, numToDelete) {
    const placeholderArr = [];
    const numToRun = arr.length;
    let numOfArg = 3;
    const argArray = splice.arguments;
    
    for (let i = 0; i < numToRun; i++) {
        const elem = arr.pop()
        placeholderArr.push(elem);
    }

    placeholderArr.reverse()

    for (let i = 0; i < numToRun; i++)   {
        
        if (numToDelete == 1) {
            
            if (i == index) {
                
                if (numOfArg >= argArray.length) {
                    continue;
                } 
                else {
                    arr.push(argArray[numOfArg]);
                }
            } 
            else {
                arr.push(placeholderArr[i]);
            }
        } 
        
        else if (numToDelete == 0) {
            
            if (i == index) {
                
                if (numOfArg >= argArray.length) {
                    continue;
                } 
                else if ((numOfArg + 1) == argArray.length) {
                    arr.push(splice.arguments[numOfArg]);
                    arr.push(placeholderArr[i]);
                    numOfArg++;
                } 
                else {
                    arr.push(placeholderArr[i]);
                }
            } 
            else {
                arr.push(placeholderArr[i]);
            }
        } 
        
        else {
            
            if (index <= i && i < (index + numToDelete)) {
                
                if (numOfArg >= argArray.length) {
                    continue;
                } 
                else {
                    arr.push(argArray[numOfArg]);
                    numOfArg++;
                }
            } 
            else {
                arr.push(placeholderArr[i]);
            }
        }
    }

    return arr;
};

const array = [1, 2, 3, 4, 5, 7, 8, 9, 10]

console.log(splice(array, 1, 3, 4, 3, 2));

// const test = () => {
//     console.log(test.arguments.length)
// }

// console.log(test.arguments.length)