var colors = require('colors');
var process = require('process');

function printStep(currentIndex, pivotIndex, low, high, highlight, arrElements) {
    for (let i = 0; i < arrElements.length; i++) {
        if (i !== 0) {
            process.stdout.write(", ");
        }
        if(i>=low && i<= high){
            if (i === highlight) {
                process.stdout.write(`${arrElements[i]}`.padStart(3).bgGreen.black);
            }
            else {
                process.stdout.write(`${arrElements[i]}`.padStart(3).blue);
            }
        } else {
            process.stdout.write(`${arrElements[i]}`.padStart(3));
        }
    }
    console.log("");
    for (let i = 0; i < arrElements.length; i++) {
        if (i !== 0) {
            process.stdout.write("  ");
        }
        
        if ( i=== currentIndex && currentIndex === pivotIndex ) {
            process.stdout.write("  \u2305".green);
        } else if (i === currentIndex) {
            process.stdout.write("  \u2305".magenta);
        } else if ( i === pivotIndex ) {
            process.stdout.write("  \u2305".yellow);
        }
        else {
            process.stdout.write('   ');
        }
    }
    if ( currentIndex === pivotIndex ) {
        console.log(`  current and pivot indexes(${"\u2305".green})=${currentIndex}`);
    } else {
        console.log(`  current index(${"\u2305".magenta})=${currentIndex}, pivot index(${"\u2305".yellow})=${pivotIndex}`);
    }
}

function print(low, high, highlight, arrElements) {
    const pivotPointValue=arrElements[high];
    const pivotValue=arrElements[highlight];
    for (let i = 0; i < arrElements.length; i++) {
        if (i !== 0) {
            process.stdout.write(", ");
        }
        if(i>=low && i<= high){
            if (i === highlight) {
                process.stdout.write(`${arrElements[i]}`.padStart(3).bgGreen.black);
            }
            else {
                process.stdout.write(`${arrElements[i]}`.padStart(3).blue);
            }
        } else {
            process.stdout.write(`${arrElements[i]}`.padStart(3));
        }
    }
    process.stdout.write(`  swapped pivot value "${pivotValue}" at the end with value pointed by pivot index "${pivotPointValue}"`);
    console.log("");
}

function swap(val1, val2){
    const tmp = val2;
    val2 = val1;
    val1 = tmp;
    return [val1, val2];
}

function quickSort(arrElements, low, high){
    let split =0;
    if (low >= high) {
        return;
    }
    split = partition(arrElements, low, high);
    console.log("---------------------------------------------------------------------------------------------------------------------------------");
    quickSort(arrElements, low, split-1);
    quickSort(arrElements, split+1, high);
}

function partition(arrElements, low, high) {
    let pivotValue = arrElements[high];
    let pivotIndex = low;
    // at the end of the loop, all the numbers smaller than the pivot will be on the left side of the pivot index
    for(let i=low;i<high;i++){
        printStep(i, pivotIndex, low,high,high,arrElements);
        // when value is less than pivotValue, swap.
        // this effectively move the current value which is bigger towards the right side of the pivot index
        if (arrElements[i] < pivotValue)
        {
            if(pivotIndex != i) {
                const text=`swap "[${i}]:${arrElements[i]}" with "[${pivotIndex}]:${arrElements[pivotIndex]}" because "${arrElements[i]}" is less than pivot value "${pivotValue}", increment pivot index`
                console.log(text.padStart(text.length+arrElements.length*5));
                const [val1,val2] = swap(arrElements[pivotIndex], arrElements[i])
                arrElements[pivotIndex]=val1;
                arrElements[i] =val2;
            } else {
                const text=`no swapping current and pivot index is the same`;
                console.log(text.padStart(text.length+arrElements.length*5));
            }
            pivotIndex = pivotIndex+1;

        }
    }
    const [val1,val2] = swap(arrElements[pivotIndex], arrElements[high])
    arrElements[pivotIndex]=val1;
    arrElements[high] =val2;

    print(low, high, pivotIndex, arrElements, colors.bgGreen.black);

    return pivotIndex;
}

let arrElements=[7,2,8,1,5,9,20,4];
console.log("original = ", arrElements);
quickSort(arrElements, 0, arrElements.length-1,'');
console.log("final = ", arrElements);
