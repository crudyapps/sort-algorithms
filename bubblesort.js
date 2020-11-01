function swap(num1, num2){
    let tmp = num1;
    num1 =num2;
    num2 = tmp;
    return [num1,num2];
}

function sort(nums){
    for(let j=0;j<nums.length-1;j++){
        for(let i=0;i<nums.length-1-j;i++){
            if(nums[i] > nums[i+1]){
                const [newCurNum, newNextNum] =swap(nums[i] ,nums[i+1]);
                nums[i]=newCurNum;
                nums[i+1]=newNextNum;
            }
        }
    }
    return nums; 
}

console.log(sort([9, 1, 7, 8, 4, 5]))
