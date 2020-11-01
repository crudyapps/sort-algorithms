function swap(arrElements, index1, index2){
    let tmp = arrElements[index1]
    arrElements[index1] = arrElements[index2];
    arrElements[index2] = tmp;
}
function partition(arrElements){
    const high= arrElements.length-1;
    const low = 0;
    const pivotValue = arrElements[high];

    let pivotIndex = low;
    for(let i=0;i<high;i++){
        if(arrElements[i]<pivotValue){
            if(i!==pivotIndex){
                swap(arrElements, pivotIndex, i);
            }
            pivotIndex=pivotIndex+1;
        }
    }
    swap(arrElements, pivotIndex, high);
    return pivotIndex;
}

let arrElements=[7,2,8,1,5,9,20,4];
console.log("original = ", arrElements);
const pivotIndex = partition(arrElements);
console.log(`final = ${arrElements}, pivot index=${pivotIndex}`);


