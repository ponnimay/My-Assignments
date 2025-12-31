

const number: number[] = [2, 4, 5, 2, 1, 2];
const k: number = 2;

function count(nums: number[], k: number): number {
  let count: number = 0;


  for (let i = 0; i < nums.length; i++) {

    if (nums[i] === k) {
      count++;
    }
  }

  return count;
}
console.log(count(number, k));