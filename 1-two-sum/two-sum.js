const nums = [3, 3];
const target = 6;

const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // In case no match is found
};

const result = twoSum(nums, target);
console.log(result);