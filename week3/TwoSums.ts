let nums: number[] = [2, 4, 7, 8, 11, 14];
let target: number = 18;
function twoSum(nums: number[], target: number){
    let results: number[][] = [];
    for (let i=0;i< nums.length;i++){
        for (let j=i+1;j< nums.length;j++){
            if (nums[i]+ nums[j]=== target){

                        results.push([i, j]);
            }

                return [i,j];    
} return results;
    }}
    console.log(twoSum(nums,target));
