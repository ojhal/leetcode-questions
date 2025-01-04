/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function targetIndices(nums, target) {
    nums.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result.push(i);
        }
    }


    return result;
}

// Example usage
const nums = [1, 2, 5, 2, 3];
const target = 2;
console.log(targetIndices(nums, target)); // Output: [1, 2]
