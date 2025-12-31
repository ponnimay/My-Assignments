function intersection(arr1: number[], arr2: number[]) {
let result :number[] = [];
for (let i=0;i< arr1.length;i++){
    for (let j=0;j< arr2.length;j++){
        if (arr1[i]=== arr2[j]){
            result.push(arr1[i]);
        }
    }

  return result;

}}
console.log(intersection([1,2,3,4],[1,2,3,]));